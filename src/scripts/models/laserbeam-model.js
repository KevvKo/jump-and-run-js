
import Lasershot from './lasershot-model'
class Laserbeam {

    #lastTimeRendered
    constructor(){
        this.items = []
        this.#lastTimeRendered = performance.now()
    }
    /**
     * 
     * @param {Array} newItems 
     */
    addLaserItems(newItems){
        const difference = (performance.now() - this.#lastTimeRendered)/60
        if(difference > 1){
            newItems.forEach((item)=>{
                this.items.push( new Lasershot(item.x, item.y, item.r))
            })
            this.#lastTimeRendered = performance.now()
        }
    }
    /**
     * @public
     */
    update(){
        if(this.items.length > 0){
            this.items.forEach( (laser) => {
                laser.update()
            })
        }
    }
    /**
     *@public
     */
    draw(){
        if(this.items.length > 0){
            this.items.forEach( (laser) => {
                if(laser.outOfCanvas()){
                    this.items.shift()
                    return
                }
                laser.draw()
            })
        }
    }
    /**
     * @public
     */
    render(){
        this.update()
        this.draw()
    }
}

export const laserBeam = new Laserbeam()