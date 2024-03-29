import Asteroid from './models/asteroid';
import Spaceship from './models/spaceship';
import { store } from '../store/store';
import { continueGame, pauseGame, gameOver} from '../store/actions/gameActions';
import config from '../assets/config/configuration.json';


const directions = ['right', 'left'];

/**
 * @private
 * @param {Number} minimumX 
 * @param {Number} maximumX
 * @param {Number} minimumY
 * @param {Number} maximumY
 * @returns {[x: Number, y: Number]} Startposition for an asteroid
 */
const computeStartPosition = (minimumX, maximumX, minimumY, maximumY) => {
    const randomX = Math.floor( Math.random() * ( maximumX - minimumX ) + minimumX );
    const randomY = Math.floor( Math.random() * ( maximumY - minimumY ) + minimumY );

    return [randomX, randomY];
};

export default class Game {
     
    #highscore;
    #asteroidLimit;
    #limitIncreaseCounter;
    /**
     * @public
     */
    init(){

        const { startAsteroidCount } = config.gameSettings;

        this.difficulty = store.getState().game.difficulty;
        this.asteroids = [];
        this.#highscore = 0;
        this.#asteroidLimit = startAsteroidCount[this.difficulty] || 20;
        this.#limitIncreaseCounter = 0;
        this.createSprites();
        this._increaseAsteroidLimit();
        this.start();
        console.info('Game initialized.');
    }  
    /**
     * @public
     */
    get highscore(){
        return this.#highscore;
    }

    /**
     * 
     * @param {Number} count 
     */
    increaseHighscore( count ){
        this.#highscore += count;
    }
    /**
     * @public
     */
    start(){

        this.canvas = document.getElementById('gameBoard');
        this.context = this.canvas.getContext('2d');
        this.loop = window.requestAnimationFrame(() => this.update());
    }
    /**
     * @public
     */
    update(){
        
        this.clear();
        this.draw();
        this._checkAsteroidsCount();
        if(this.spaceship.life <= 0) {
            this.gameOver();
            return;
        }

        const gameIsPaused = store.getState().game.gameIsPaused;

        if(!gameIsPaused) this.loop = window.requestAnimationFrame(() => this.update());
    }
    /**
     * @public
     */
    togglePause(){

        const gameIsPaused = store.getState().game.gameIsPaused;

        if(!gameIsPaused) store.dispatch(pauseGame());
        else {

            if(gameIsPaused) store.dispatch(continueGame());
            this.update();
        }
    }
    /**
     * @public
     */
    gameOver(){
        store.dispatch(gameOver());
        this.stop();
        this._handleHighscores();
    }
    /**
     * @public  
     */
    stop(){ window.cancelAnimationFrame(this.loop); }
    /**
     * @public
     */
    createSprites(){

        const spaceshipImg = document.getElementById('spaceship');
        const width = store.getState().canvas.width;
        const height = store.getState().canvas.height;

        this.spaceship = new Spaceship( (width / 2) - 50, (height / 2) - 50, spaceshipImg); //minus 50px -> half of width from the rendered sprite to center the image in the canvas
        this._createAsteroids();
    } 
    /**
     * @private
     */
    _checkAsteroidsCount(){
        const currentAsteroidsLimit = this.asteroids.length + this.#limitIncreaseCounter;
        const pointsMultiplier = 10;
        
        if( currentAsteroidsLimit < this.#asteroidLimit ){
            const countDifference = this.#asteroidLimit - currentAsteroidsLimit;
            this.increaseHighscore(countDifference * pointsMultiplier);
            this._createAsteroids();
        }
    }
    /**
     * @public
     */
    draw(){ 
        this.spaceship.render(this.asteroids);
        this._renderAsteroids();
    }
    /**
     * @private
     */
    _renderAsteroids(){
        
        const indexes = [];
        const asteroids = this.asteroids;

        if (asteroids.length && asteroids.length > 0){
            let i = 0, l = asteroids.length;

            while(i < l){
                if(asteroids[i].isOffScreen() || asteroids[i].life <= 0){
                    indexes.push(i);
                    i++;
                    continue;
                } 
                asteroids[i].render();
                i++;
            }

            let j = 0, k = indexes.length;

            while(j < k){
                const index = indexes[j];
                this.asteroids.splice(index, 1);
                j++;
            }
        }
    }
    /**
     * @private
     */
    _createAsteroids(){

        const width = store.getState().canvas.width;
        const height = store.getState().canvas.height;
        const { asteroidRadius, alphaWall } = config.gameSettings;
        const spaceshipImg = document.getElementById('asteroid1');
        const currentAsteroidsCount = this.asteroids.length;

        if( currentAsteroidsCount < this.#asteroidLimit){

            const minimumWidth = alphaWall + asteroidRadius;
            const maximumWidth = width - alphaWall - asteroidRadius;
            const minimumHeight = alphaWall + asteroidRadius;
            const maximumHeight = height - alphaWall - asteroidRadius;

            const startPosition = computeStartPosition(minimumWidth, maximumWidth, minimumHeight, maximumHeight);

            const directionOfRotation = directions[Math.floor(Math.random() * 2)];
            this.asteroids.push(new Asteroid( startPosition[0], -startPosition[1], spaceshipImg, directionOfRotation ));
        }       
    }
    /**
     * @public
     */
    clear(){
        const width = store.getState().canvas.width;
        const height = store.getState().canvas.height;
        this.context.clearRect(0,0, width, height);
    }

    /**
     * @private
     */
    _handleHighscores(){
        const gameScores = JSON.parse(localStorage.getItem('gameScores'));

        if(!gameScores) {
            const newGameScores = JSON.stringify( { highscore: this.#highscore, scores: [{ name: 'dummy', score: this.#highscore }]});
            localStorage.setItem('gameScores', newGameScores);
            return;
        }

        gameScores.highscore = this.#highscore > gameScores.highscore ? this.#highscore : gameScores.highscore;
        gameScores.scores.push({name: 'dummy', score: this.#highscore });

        localStorage.setItem('gameScores', JSON.stringify(gameScores));
    }
    /**
     * @private
     */
    _increaseAsteroidLimit(){
        const intervalForLimitIncrease = this.difficulty === 'hard' ?  3000 : this.difficulty === 'easy' ? 10000 : 5000;
        const increaseCount = this.difficulty === 'hard' ? 3 : this.difficulty === 'easy' ? 1 : 2;

        setInterval(() => {
            this.#asteroidLimit += increaseCount;
        }, intervalForLimitIncrease);
    }
}