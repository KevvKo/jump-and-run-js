
import LaserItem from './laserItem-model';

export default class Laserbeam {

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
                items.push( new LaserItem(item.x, item.y, item.r));
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
            const indexes = [];

            while(i < l){
                const laserItem = items[i];
                const itemHasHitted = laserItem.update(asteroids);
                
                if(itemHasHitted) indexes.push(i);
                i++;
            }

            i = 0, l = indexes.length;

            while( i < l ){
                const index = indexes[i];
                this.items.splice(index, 1);
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