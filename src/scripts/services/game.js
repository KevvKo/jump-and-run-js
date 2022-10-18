import Asteroid from '../models/asteroid-model';
import Spaceship from '../models/spaceship-model';
import { store } from '../../store/store';
import { continueGame, pauseGame, gameOver} from '../../store/actions/gameActions';
import config from '../../assets/config/characters.json';


const directions = ['right', 'left'];

class Game {
     
    /**
     * @public
     */
    init(){
        this.difficulty = store.getState().game.difficulty;
        this.asteroids = [];
        this.createSprites();
        this.start();
        console.info('Game initialized.');
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
    gameOver(){
        store.dispatch(gameOver());
        this.stop();
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
     * private
     */
    _checkAsteroidsCount(){
        const { asteroidCount } = config.gameSettings;
        const currentAsteroidsCount = this.asteroids.length;
        
        if( currentAsteroidsCount < asteroidCount ){
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
     * @TODO replace datastructure tu remove asteroids... maybe with a stack?
     */
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

        const width = store.getState().canvas.width - 50;
        const { asteroidCount, asteroidMinDistance, asteroidMaxDistance, asteoidBorderDistance } = config.gameSettings;
        const spaceshipImg = document.getElementById('asteroid1');
        const currentAsteroidsCount = this.asteroids.length;

        if( currentAsteroidsCount < asteroidCount){
            const randomX = Math.floor(
                Math.random() * ( (width - asteoidBorderDistance) - asteoidBorderDistance) + asteoidBorderDistance
            );
            const randomY = Math.floor(Math.random() * ( asteroidMaxDistance - asteroidMinDistance ) + asteroidMinDistance);
            const directionOfRotation = directions[Math.floor(Math.random() * 2)];
            this.asteroids.push(new Asteroid( randomX, -randomY, spaceshipImg, directionOfRotation ));
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
}

export default Game;