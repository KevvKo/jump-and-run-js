import Sprite from '../models/sprite-model';
import { store } from '../../store/store';
import data from '../../assets/config/characters.json';

export default class character {
    /**
     * private
     */
    #ax;
    #ay;
    #y;
    #x;
    #friction;
    #speed;
    sprite;

    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @param {TexImageSource} spriteImg 
     * @param {Number} speed 
     * @param {Number} friction 
     */
    constructor(x, y, spriteImg, speed, friction){
        this.#ax = 0;
        this.#ay = 0;
        this.#x = x;
        this.#y = y;
        this.#friction = friction;
        this.#speed = speed;

        this.sprite = new Sprite(
            spriteImg,
            0, 0,
            100, 100, 
            x, y, 
            [0, 100, 200, 300]); //clipping sizes for a default sprite
    }
    /**
     * @public
     */
    move(){

        const keys = store.getState().keys;
        const { maxVelocity } = data.spaceship;

        if((keys['KeyW'] || keys['ArrowUp']) && this.#ay <= maxVelocity) this.#ay += this.#speed;
        if(keys['KeyS'] || keys['ArrowDown']) this.#ay -= this.#speed;
        if(keys['KeyA'] || keys['ArrowLeft']) this.#ax -= this.#speed;
        if((keys['KeyD'] || keys['ArrowRight']) && this.#ax <= maxVelocity) this.#ax += this.#speed;

        this.#ax *= this.#friction;
        this.#ay *= this.#friction;

        this.#x += this.#ax;
        this.#y -= this.#ay;
    }
    /**
     * @public
     */
    checkBorderCollision(){

        const width = store.getState().canvas.width;
        const height = store.getState().canvas.height;

        if(this.#x + 100 <= 0) this.#x = width;
        if(this.#x >= width + 2) this.#x = -100;
        if(this.#y + 100 <= 0) this.#y = height;
        if(this.#y >= height + 2) this.#y = -100;
    
    }
    /**
     * @public
     */
    update(){
        this.move();
        this.checkBorderCollision();
        this.sprite.x = this.#x;
        this.sprite.y = this.#y;
        this.sprite.update();
    }
}