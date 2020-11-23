
export default class Sprite{

    #img
    #clippingX
    #clippingY
    #spriteWidth
    #spriteHeight
    #x
    #y
    #minWidth
    #maxWidth
    #timestamp

    constructor(img, clippingX, clippingY, spriteWidth, spriteHeight, x, y, minWidth, maxWidth ){
        
        this.#img = img
        this.#clippingX = clippingX
        this.#clippingY = clippingY
        this.#spriteWidth = spriteWidth
        this.#spriteHeight = spriteHeight
        this.#x = x
        this.#y = y
        this.#minWidth = minWidth
        this.#maxWidth = maxWidth
        this.#timestamp = Date.now()
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

        const difference = (Date.now() - this.#timestamp)/60

        if(difference >= 1.2){

            this.#timestamp = Date.now()
            this.#clippingX += this.#minWidth
            
            if(this.#clippingX > this.#maxWidth) this.#clippingX = this.#minWidth
    }
    }

    render(){

        this.update()
        this.draw()
    }
    
}