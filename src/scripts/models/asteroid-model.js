import Character from '../interfaces/character';
import data from '../../assets/config/characters.json';

export default class Asteroid extends Character{

    #life;
    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @param {TexImageSource} spriteImage
     */
    constructor(x, y, spriteImage){
        super(x, y, spriteImage, data.asteroid.speed, data.asteroid.friction);
        this.#life = data.asteroid.life;
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