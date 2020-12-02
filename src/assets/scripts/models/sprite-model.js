
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

    draw(){

        const canvas = document.querySelector('canvas')
        const context = canvas.getContext('2d')

        context.drawImage(
            this.#img,
            this.#clippingX,
            this.#clippingY,
            this.#spriteWidth,
            this.#spriteHeight,
            this.#x,
            this.#y,
            this.#spriteWidth,
            this.#spriteHeight

        )
    }

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

    render(){

        this.update()
        this.draw()
    }
    
}