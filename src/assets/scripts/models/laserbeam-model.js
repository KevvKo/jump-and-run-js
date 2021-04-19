
import Lasershot from './lasershot-model'

/**
 * @todo Add damage as attribute from json
 */
export default class Laserbeam {

    #x1
    #y1
    #x2
    #y2
    #laserShot1
    #laserShot2

    /**
     * 
     * @param {Number} x1 
     * @param {Number} y1 
     * @param {Number} x2 
     * @param {Number} y2 
     */
    constructor(x1, y1, x2, y2){
        
        const lasershotImage = document.getElementById('laser')

        this.#x1 = x1
        this.#y1 = y1
        this.#x2 = x2
        this.#y2 = y2
        this.#laserShot1 = new Lasershot(5, x1, y2, lasershotImage)
        this.#laserShot2 = new Lasershot(5, x2, y2, lasershotImage)
    }

    renderLasershots(){
        this.#laserShot1.render()
        this.#laserShot2.render()
    }
}