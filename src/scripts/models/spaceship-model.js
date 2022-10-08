import data from '../../assets/config/characters.json';
import { laserBeam } from './laserbeam-model';
import { store } from '../../store/store';
import Sprite from '../models/sprite-model';

export default class Spaceship{

    #life;
    #ax;
    #ay;
    #y;
    #x;
    #friction;
    #speed;
    sprite;
    #width;
    #height;

    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @param {TexImageSource} spriteImage
     * @param {Number} x 
     * @param {Number} y 
     * @param {TexImageSource} spriteImg 
     * @param {Number} speed 
     * @param {Number} friction
     */
    constructor(x, y, spriteImage){
        this.#life = data.spaceship.life;
        this.#ax = 0;
        this.#ay = 0;
        this.#x = x;
        this.#y = y;
        this.#width = 100;
        this.#height = 100;
        this.#friction = data.spaceship.friction;
        this.#speed = data.spaceship.speed;
        this.sprite = new Sprite(
            spriteImage,
            0, 0,
            this.#width, this.#height, 
            x, y, 
            [0, 100, 200, 300] //clipping sizes for a default sprite
        ); 
    }
    /**
     * @public
     */
    get life(){ return this.#life; }
    /**
     * @public
     * @param (Number) val
     */
    set life(val){ this.#life = val; }
    /**
     * public
     */
    decreaseLife() {
        this.#life -= 20;
    }
    /**
     * @public
     */
    shoot(){
        const t = this.getRotatedPosition(-37 , -32);
        const e = this.getRotatedPosition(42, -32);
        const r = this.getRotation();

        const items = [
            {x: t.x, y: t.y , r: r },
            {x: e.x, y: e.y , r: r }
        ];

        laserBeam.addLaserItems(items);
    }
    /**
     * @public
     */
    render(asteroids){
        const keys = store.getState().keys;
        if(keys.Space) this.shoot();
        this.update(asteroids);
        this.sprite.drawSprite();
    }
    /**
     * @public
     * @returns Object
     */
    getPosition(){
        return {x: this.sprite.x, y: this.sprite.y};
    }
    /**
     * @public
     * @returns Number
     */
    getRotation(){
        return this.sprite.r;
    }
    /**
     * 
     * @param {Number} cx 
     * @param {Number} cy 
     * @returns Object
     */
    getRotatedPosition(cx, cy){
        const x = this.getPosition().x + 43;
        const y = this.getPosition().y + 40;
        const r = this.getRotation();
        const c = Math.cos(r);
        const s = Math.sin(r);
        const rx = (cx * c) - (cy * s) + x;
        const ry = (cx * s) + (cy * c) + y;

        return {x: rx, y: ry};
    }
    /**
     * 
     * @param {} asteroid 
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
    /**
     * @public
     */
            move(){

            const keys = store.getState().keys;
            const { maxVelocity } = data.spaceship;

            if((keys['KeyW'] || keys['ArrowUp']) && this.#ay <= maxVelocity) this.#ay += this.#speed;
            if(keys['KeyS'] || keys['ArrowDown']) this.#ay -= this.#speed;
            if(keys['KeyA'] || keys['ArrowLeft']) this.#ax -= this.#speed;
            if((keys['KeyD'] || keys['ArrowRight']) && this.#ax <= maxVelocity) this.#ax += this.#speed;

            this.#ax *= this.#friction;
            this.#ay *= this.#friction;

            this.#x += this.#ax;
            this.#y -= this.#ay;
        }
        /**
         * @public
         */
        checkBorderCollision(){

            const width = store.getState().canvas.width;
            const height = store.getState().canvas.height;

            if(this.#x + 100 <= 0) this.#x = width;
            if(this.#x >= width + 2) this.#x = -100;
            if(this.#y + 100 <= 0) this.#y = height;
            if(this.#y >= height + 2) this.#y = -100;
        
        }
        /**
         * @public
         */
        update(asteroids){

            this.move();

            // if any asteroid is in the queue check for a collision
            if(asteroids.length > 0){
                let i = 0, l = asteroids.length;

                while(i < l){
                    const asteroid = asteroids[i];
                    const hasCollided = this.checkCollisionWithAsteroid(asteroid);

                    if(hasCollided) {
                        this.decreaseLife();
                        break;
                    }
                    i++;
                }
            }
            
            this.checkBorderCollision();
            this.sprite.x = this.#x;
            this.sprite.y = this.#y;
            this.sprite.update();
        }
}