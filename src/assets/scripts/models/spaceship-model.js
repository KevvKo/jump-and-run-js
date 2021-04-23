import Character from '../interfaces/character'
import { laserBeam } from './laserbeam-model'
import data from '../../config/characters.json'
export default class Spaceship extends Character{

    #life
    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @param {TexImageSource} spriteImage
     */
    constructor(x, y, spriteImage){
        super(x, y, spriteImage, data.spaceship.speed, data.spaceship.friction)
        this.#life = data.spaceship.life
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
    shoot(){

        const x = this.getPosition().x
        const y = this.getPosition().y

        const items = [
            {x: x + 7, y: y },
            {x: x + 85, y: y }]
        laserBeam.addLaserItems(items)
    }

    /**
     * @public
     */
    render(){
        this.update()
        this.sprite.drawSprite()
    }
    /**
     * @public
     * @returns Object
     */
    getPosition(){
        return {x: this.sprite.x, y: this.sprite.y}
    }
}