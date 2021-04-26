import Character from '../interfaces/character'
import data from '../../config/characters.json'

import { laserBeam } from './laserbeam-model'
import { store } from '../../store/store'
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
        const r = this.getRotation()


        const xr = ((x) *Math.cos(r)) - ((y-50) * Math.sin(r)) 
        const yr = ((x) *Math.sin(r)) + ((y-50) * Math.cos(r)) 

        const items = [
            {x: xr , y: yr, r: r },
            {x: xr , y: yr, r: r }]
        laserBeam.addLaserItems(items)
    }
    /**
     * @public
     */
    render(){
        const keys = store.getState().keys

        if(keys.Space) this.shoot()
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
    /**
     * @public
     * @returns Number
     */
    getRotation(){
        return this.sprite.r
    }
}