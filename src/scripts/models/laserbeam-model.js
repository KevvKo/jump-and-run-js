
import Lasershot from './lasershot-model';

class Laserbeam {

    #lastTimeRendered;

    constructor(){
        this.items = [];
        this.#lastTimeRendered = performance.now();
    }
    /**
     * 
     * @param {Array} newItems 
     */
    addLaserItems(newItems){
        const difference = (performance.now() - this.#lastTimeRendered)/60;
        
        if(difference > 1){

            const items = this.items;
            let i = 0, l = newItems.length;
            
            while(i < l){
                const item = newItems[i];
                items.push( new Lasershot(item.x, item.y, item.r));
                i++;
            }

            this.#lastTimeRendered = performance.now();
        }
    }
    /**
     * @public
     * @param{array} asteroids 
     */
    update(asteroids){
        if(this.items.length > 0){

            const items = this.items;
            let i = 0, l = items.length;

            while(i < l){
                const laserItem = items[i];
                laserItem.update(asteroids);
                i++;
            }
        }
    }
    /**
     *@public
     */
    draw(){
        if(this.items.length > 0){

            const items = this.items;
            let i = 0, l = items.length;

            while(i < l){
                const laserItem = items[i];
                if(laserItem.outOfCanvas()){
                    items.shift();
                    return;
                }
                laserItem.draw();
                i++;
            }
        }
    }
    /**
     * @public
     * @param{array} asteroids 
     */
    render(asteroids){
        this.update(asteroids);
        this.draw();
    }
}

export const laserBeam = new Laserbeam();