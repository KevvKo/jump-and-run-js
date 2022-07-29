import Character from '../interfaces/character';
import data from '../../assets/config/characters.json';
import { laserBeam } from './laserbeam-model';
import { store } from '../../store/store';

export default class Spaceship extends Character{

    #life;
    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @param {TexImageSource} spriteImage
     */
    constructor(x, y, spriteImage){
        super(x, y, spriteImage, data.spaceship.speed, data.spaceship.friction);
        this.#life = data.spaceship.life;
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
    shoot(){
        const t = this.getRotatedPosition(-37 , -32);
        const e = this.getRotatedPosition(42, -32);
        const r = this.getRotation();

        const items = [
            {x: t.x, y: t.y , r: r },
            {x: e.x, y: e.y , r: r }];
        laserBeam.addLaserItems(items);
    }
    /**
     * @public
     */
    render(){
        const keys = store.getState().keys;

        if(keys.Space) this.shoot();
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