
export default class Sprite{

    #img
    #clippingX
    #clippingY
    #spriteWidth
    #spriteHeight
    #x
    #y
    #frames
    #frameIndex
    #lastTimeRendered
    #r

    /**
     * 
     * @param {Image} img 
     * @param {Integer} clippingX 
     * @param {Integer} clippingY 
     * @param {Integer} spriteWidth 
     * @param {Integer} spriteHeight 
     * @param {Integer} x 
     * @param {Integer} y 
     * @param {Integer} frames 
     */
    constructor(img, clippingX, clippingY, spriteWidth, spriteHeight, x, y, frames ){
        
        this.#img = img
        this.#clippingX = clippingX
        this.#clippingY = clippingY
        this.#spriteWidth = spriteWidth
        this.#spriteHeight = spriteHeight
        this.#x = x
        this.#y = y
        this.#frames = frames
        this.#frameIndex = 0
        this.#lastTimeRendered = performance.now()
        this.#r = 0
    }

    get x(){
        return this.#x
    }

    set x(val){
        this.#x = val
    }

    get y(){
        return this.#y
    }

    set y(val){
   
        this.#y = val
    }

    get r(){
        return this.#r 
    }

    set r(val){
        this.#r = val
    }
    
    /**
     * @public
     */
    draw(){

        const canvas = document.querySelector('canvas')
        const context = canvas.getContext('2d')
        context.save()
        context.translate(this.#x + this.#spriteWidth/2, this.#y + this.#spriteHeight/2)
        context.rotate(this.#r)

        context.drawImage(
            this.#img,
            this.#clippingX,
            this.#clippingY,
            this.#spriteWidth,
            this.#spriteHeight,
            -this.#spriteWidth/2,
            -this.#spriteHeight/2,
            this.#spriteWidth,
            this.#spriteHeight
        )

        context.restore()
    }

    /**
     * @public
     */
    update(){

        const difference = (performance.now() - this.#lastTimeRendered)/60

        if(difference >= 1.1){                  //1.1 -> smoothest time to animate

            this.#lastTimeRendered = performance.now()            
            this.#frameIndex += 1

            if(this.#frameIndex > this.#frames.length - 1){
                this.#frameIndex = 0
            }

            this.#clippingX = this.#frames[this.#frameIndex]
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