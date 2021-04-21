
import Lasershot from './lasershot-model'

/**
 * @todo Add damage as attribute from json
 */
class Laserbeam {

    #x1
    #y1
    #x2
    #y2
    #laserItem1
    #laserItem2
    #laserItems
    /**
     * 
     * @param {Number} x1 
     * @param {Number} y1 
     * @param {Number} x2 
     * @param {Number} y2 
     */
    constructor(){
        
        this.items = []
    }

    /**
     * 
     * @param {Array} newItems 
     */
    addLaserItems(newItems){
        newItems.forEach((item)=>{
            this.items.push( new Lasershot(item.x, item.y))
        })
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
     * 
     */
    draw(){
        if(this.items.length > 0){
            this.items.forEach( (laser) => {
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