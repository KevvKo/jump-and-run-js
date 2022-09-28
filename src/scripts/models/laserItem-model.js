import data from '../../assets/config/characters.json';
import { store } from '../../store/store';

export default class LaserItem{

    #x;
    #y;
    #r;
    #image;
    #width;
    #height;
    #damage;

    constructor( x, y, r){
        this.#image = document.getElementById('laser');
        this.#x = x;
        this.#y = y;
        this.#r = r;
        this.#width = 6;
        this.#height = 17;
        this.#damage = 5;
    }
    /**
     * @public
     */
    get damage(){
        return this.#damage;
    }
    /**
     * @public 
     * @param(Number) val
     */
    set damage(val){
        this.#damage = val;
    }
    /**
     * @public
     * @param{array} asteroids 
     */
    update(asteroids){
        this.#x += Math.sin(this.#r) * data.laser.speed;
        this.#y -= Math.cos(this.#r) * data.laser.speed;

        let i = 0, l = asteroids.length;
        while(i < l){
            const asteroid = asteroids[i];
            
            if(this.checkCollisionWithAsteroid(asteroid)){
                asteroid.decreaseLife(this.#damage);
            }
            i++;
        }
    }
    /**
     * @public
     */
    draw(){
        const canvas = document.querySelector('canvas');
        const context = canvas.getContext('2d');
        context.save();
        context.translate(this.#x + this.#width/2, this.#y + this.#height/2);
        context.rotate(this.#r);
        context.translate(-(this.#x + this.#width/2), -(this.#y + this.#height/2));
        context.drawImage(
            this.#image,
            this.#x,
            this.#y
        );
        context.restore();
    }
    /**
     * @public
     * @returns Boolean
     */
    outOfCanvas(){

        const width = store.getState().canvas.width;
        const height = store.getState().canvas.height;
        const outOfXAxis = this.#x + 100 <= 0 || this.#x >= width + 2;
        const outOfYAxis = this.#y + 100 <= 0 || this.#y >= height + 2;

        return outOfXAxis || outOfYAxis;
    }
    /**
     * @public
     */
    checkCollisionWithAsteroid(asteroid){
        
        const r = 50;
        const cPosition = asteroid.getPosition();
        const x1 = this.#x;
        const y1 = this.#y;
        const x2 = x1 + this.#width;
        const y2 = y1 + this.#height;

        return this.checkOverlap(r, cPosition.x + 50, cPosition.y + 50, x1, y1, x2, y2);
    }

    /**
     * @public
     * @param {Number} R    radius of the given circle
     * @param {Number} Xc   x-position of the given circle
     * @param {Number} Yc   y-position of the given circle
     * @param {Number} X1   x-position 1 of the given rectangle
     * @param {Number} Y1   y-position 1 of the given rectangle
     * @param {Number} X2   x-position 2 of the given rectangle
     * @param {Number} Y2   y-position 2 of the given rectangle
     * @returns 
     */
         checkOverlap(R, Xc, Yc, X1, Y1, X2, Y2){
   
            let Xn = Math.max(X1, Math.min(Xc, X2));
            let Yn = Math.max(Y1, Math.min(Yc, Y2));
            let Dx = Xn - Xc;
            let Dy = Yn - Yc;
            return (Dx * Dx + Dy * Dy) <= R * R;
        }
}