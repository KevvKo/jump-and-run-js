import config from '../../assets/config/characters.json';
import Sprite from '../models/sprite-model';
import { store } from '../../store/store';

export default class Asteroid {

    #directionOfRotation;
    #life;
    #movementSpeed;
    #rotationSpeed;
    #x;
    #y;
    #r;
    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @param {TexImageSource} spriteImage
     */
    constructor(x, y, spriteImage, directionOfRotation){

        this.#directionOfRotation = directionOfRotation;
        this.#life = config.asteroid.life;
        this.#movementSpeed = config.asteroid.movementSpeed; 
        this.#rotationSpeed = config.asteroid.rotationSpeed;
        this.#x = x;
        this.#y = y;
        this.sprite = new Sprite(
            spriteImage,
            0, 0,
            100, 100, 
            x, y, 
            [0, 100, 200, 300]); //clipping sizes for a default sprite
    }
    /**
     * @public
     */
    get life(){ return this.#life; }
    /**
     * @public
     * @param (Number) val
     */
    set life(val){ this.#life = val; }
        /**
     * @public
     */
    move(){ this.#y += this.#movementSpeed; }
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
        this.sprite.x = this.#x;
        this.sprite.y = this.#y;
        this.#directionOfRotation === 'right'
            ? this.sprite.r += this.#rotationSpeed * Math.PI / 180
            : this.sprite.r -= this.#rotationSpeed * Math.PI / 180;
        this.sprite.update();
    }
    /**
     * @public
     */
    render(){
        this.update();
        this.sprite.drawSprite();
    }
    /**
     * @public
     * @returns Object
     */
    getPosition(){
        return {x: this.sprite.x, y: this.sprite.y};
    }
    /**
     * @public
     * @returns Number
     */
    getRotation(){
        return this.sprite.r;
    }
    /**
     * 
     * @param {Number} cx 
     * @param {Number} cy 
     * @returns Object
     */
    getRotatedPosition(cx, cy){
        const x = this.getPosition().x + 43;
        const y = this.getPosition().y + 40;
        const r = this.getRotation();
        const c = Math.cos(r);
        const s = Math.sin(r);
        const rx = (cx * c) - (cy * s) + x;
        const ry = (cx * s) + (cy * c) + y;

        return {x: rx, y: ry};
    }
}