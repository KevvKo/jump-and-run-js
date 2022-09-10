import data from '../../assets/config/characters.json';
import { store } from '../../store/store';
export default class Lasershot{

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
            this.checkCollisionWithAsteroid(asteroid);
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

    }
}