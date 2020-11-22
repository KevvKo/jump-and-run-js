
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
        this.clippingSprite()
    }

    clippingSprite(){
        this.#clippingX += this. #minWidth
        console.log(this.#clippingX)
        if(this.#clippingX >= this.#maxWidth){
            this.#clippingX = this.#minWidth
        }
    }
    
}