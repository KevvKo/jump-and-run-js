
export default class Sprite{

    #img
    #clippingX
    #clippingY
    #spriteWidth
    #spriteHeight
    #x
    #y

    constructor(img, clippingX, clippingY, spriteWidth, spriteHeight, x, y ){
        
        this.#img = img
        this.#clippingX = clippingX
        this.#clippingY = clippingY
        this.#spriteWidth = spriteWidth
        this.#spriteHeight = spriteHeight
        this.#x = x
        this.#y = y
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
    
}