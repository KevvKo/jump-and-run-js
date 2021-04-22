import Character from '../interfaces/character'
import { laserBeam } from './laserbeam-model'
import data from '../../config/characters.json'
export default class Spaceship extends Character{

    #life
    #damage
    #x
    #y
    #laserBeam
    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @param {TexImageSource} spriteImage
     */
    constructor(x, y, spriteImage){
        super(x, y, spriteImage, data.spaceship.speed, data.spaceship.friction)
        this.#x = x
        this.#y = y
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
    shoot(){
        const items = [
            {x: this.#x + 7, y: this.#y },
            {x: this.#x + 85, y: this.#y }
        ]
        laserBeam.addLaserItems(items)
    }

    /**
     * @public
     */
    render(){
        this.update()
        this.sprite.drawSprite()
    }
}