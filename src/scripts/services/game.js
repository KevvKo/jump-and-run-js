import Asteroid from '../models/asteroid-model';
import Spaceship from '../models/spaceship-model';
import { laserBeam } from '../models/laserbeam-model';
import { store } from '../../store/store';
import { continueGame, pauseGame } from '../../store/actions/gameActions';
import config from '../../assets/config/characters.json';


const directions = ['right', 'left'];

class Game{
    /**
     * @public
     */
    init(){
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
     * @public
     */
    draw(){ 
        laserBeam.render();
        this.spaceship.render();
        this._renderAsteroids();
    }
    /**
     * @private
     */
    _renderAsteroids(){
        
        const asteroids = this.asteroids;
        if (asteroids.length && asteroids.length > 0){
            for(let i = 0, l = asteroids.length; i < l; i++){
                asteroids[i].render();
            }
        }
    }
    /**
     * @private
     */
    _createAsteroids(){

        const width = store.getState().canvas.width - 50;
        const { asteroidCount, asteroidMinDistance, asteroidMaxDistance } = config.gameSettings;
        const spaceshipImg = document.getElementById('spaceship');

        for(let i = 0; i < asteroidCount; i++){
            
            const randomX = Math.floor(Math.random() * ( width - 50 )) + 50;
            const randomY = Math.floor(Math.random() * ( asteroidMaxDistance - asteroidMinDistance )) + asteroidMinDistance;
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
const game = new Game();
export { game };