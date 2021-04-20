import Sprite from '../models/sprite-model'
import { store } from '../../store/store'

export default class character {
    /**
     * private
     */
    #r  
    #vx
    #vy
    #ax
    #ay
    #y
    #x
    #friction
    #speed
    sprite

    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @param {TexImageSource} spriteImg 
     * @param {Number} speed 
     * @param {Number} friction 
     */
    constructor(x, y, spriteImg, speed, friction){
        this.#r = 0
        this.#vx = 0
        this.#vy = 0
        this.#ax = 0
        this.#ay = 0
        this.#x = x
        this.#y = y
        this.#friction = friction
        this.#speed = speed

        this.sprite = new Sprite(
            spriteImg,
            0, 0,
            100, 100, 
            x, y, 
            [0, 100, 200, 300])
    }
    /**
     * @public
     */
    move(){

        const keys = store.getState().keys
        
        if(keys['KeyW'] || keys['ArrowUp']){ 
            this.#ax = Math.sin(this.#r) * this.#speed
            this.#ay = Math.cos(this.#r) * this.#speed
        }else {
            this.#ax = this.#ay = 0
        }
    

        if(keys['KeyA'] || keys['ArrowLeft']) this.#r -= 0.02
        if(keys['KeyD'] || keys['ArrowRight']) this.#r += 0.02

        this.#vx += this.#ax
        this.#vy += this.#ay

        this.#vx *= this.#friction
        this.#vy *= this.#friction

        this.#x += this.#vx
        this.#y -= this.#vy

        this.sprite.r = this.#r
    }
    /**
     * @public
     */
    checkBorderCollision(){

        const width = store.getState().canvas.width
        const height = store.getState().canvas.height

        if(this.#x + 100 <= 0) this.#x = width
        if(this.#x >= width + 2) this.#x = -100
        if(this.#y + 100 <= 0) this.#y = height 
        if(this.#y >= height + 2) this.#y = -100
    
    }
    /**
     * @public
     */
    update(){
        this.move()
        this.checkBorderCollision()
        this.sprite.x = this.#x
        this.sprite.y = this.#y
        this.sprite.update()
    }

    /**
     * @abstract
     * @override
     */
    render(){}
}