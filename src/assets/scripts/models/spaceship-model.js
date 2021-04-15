import Character from '../interfaces/character'
import data from '../../metadata/character-attributes.json'
export default class Spaceship extends Character{

    /**
     * private
     */

    #life
    #damage
    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @param {TexImageSource} spriteImg 
     */
    constructor(x, y, spriteImg){
        super(x, y, spriteImg, data.spaceship.speed, data.spaceship.friction)
        this.#life = data.spaceship.life
        this.#damage = data.spaceship.damage
    }
    /**
     * @public
     */
    get life(){ return this.#life }
    /**
     * @public
     * @param (Number) val
     */
    set life(val){ this.#life = val }
    /**
     * @public
     */
    get damage(){ return this.#damage }
    /**
     * @public
     * @param (Number) val
     */
    set damage(val){ return this.#damage = val }
    /**
     * @public
     */
    shoot(){}

}