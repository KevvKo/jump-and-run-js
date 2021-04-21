import data from '../../config/characters.json'
export default class Lasershot{

    #x
    #y
    #image
    #width
    #height
    #damage

    constructor( x, y){
        this.#image = document.getElementById('laser')
        this.#x = x
        this.#y = y
        this.#width = 100
        this.#height = 100
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
    /**
     * @public
     */
    draw(){
        const canvas = document.querySelector('canvas')
        const context = canvas.getContext('2d')
        context.save()
        context.translate(this.#x + this.#width/2, this.#y + this.#height/2)
        context.drawImage(
            this.#image,
            this.#x,
            this.#y
        )
        context.restore()
    }
}