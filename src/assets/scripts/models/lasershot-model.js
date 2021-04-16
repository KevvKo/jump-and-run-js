import Character from "../interfaces/character";
import data from '../../config/characters.json'

export default class LaserBeam extends Character{

    #damage

    constructor(damage, x, y, spriteImage){
        super(x,y,spriteImage, data.laserBeam.speed , data.laserBeam.friction)
        this.#damage = damage
    }

    /**
     * @public
     */
    get damage(){
        return this.#damage
    }

    /**
     * @public 
     * @param(Number) val
     */
    set damage(val){
        this.#damage = val
    }
}