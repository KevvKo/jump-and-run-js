import Character from "../interfaces/character";
import data from '../../config/characters.json'

export default class Lasershot extends Character{

    #x
    #y
    #damage

    constructor( x, y){
        const lasershotImage = document.getElementById('laser')
        super(x, y, lasershotImage, data.laserBeam.speed , data.laserBeam.friction)
        this.#x = x
        this.#y = y
        this.#damage = 5
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
    /**
     * 
     */
    update(){
        this.#x += 1 
        this.#y += 1
    }
}