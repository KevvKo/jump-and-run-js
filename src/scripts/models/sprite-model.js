export default class Sprite{

    #img;
    #clippingX;
    #clippingY;
    #spriteWidth;
    #spriteHeight;
    #x;
    #y;
    #frames;
    #frameIndex;
    #lastTimeRendered;
    #r;

    /**
     * @public
     * @param {TexImageSource} img 
     * @param {Number} clippingX 
     * @param {Number} clippingY 
     * @param {Number} spriteWidth 
     * @param {Number} spriteHeight 
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} frames 
     */
    constructor(img, clippingX, clippingY, spriteWidth, spriteHeight, x, y, frames ){
        
        this.#img = img;
        this.#clippingX = clippingX;
        this.#clippingY = clippingY;
        this.#spriteWidth = spriteWidth;
        this.#spriteHeight = spriteHeight;
        this.#x = x;
        this.#y = y;
        this.#frames = frames;
        this.#frameIndex = 0;
        this.#lastTimeRendered = performance.now();
        this.#r = 0;
    }
    /**
     * @public
     */
    get x(){ return this.#x; }
    /**
     * @public
     * @param (Number) val
     */
    set x(val){ this.#x = val; }
    /**
     * @public
     */
    get y(){ return this.#y; }
    /**
     * @public
     * @param (Number) val
     */
    set y(val){ this.#y = val; }
    /**
     * @public
     */
    get r(){ return this.#r; }
    /**
     * @public
     * @param (Number) val
     */
    set r(val){ this.#r = val; }
    /**
     * @public
     */
    drawSprite(){

        const canvas = document.querySelector('canvas');
        
        if(canvas) {
            
            const context = canvas.getContext('2d');

            context.save();
            context.translate(this.#x + this.#spriteWidth/2, this.#y + this.#spriteHeight/2);
            context.rotate(this.#r);
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
            );
            context.restore();
        }
    }
    /**
     * @public
     */
    update(){

        const difference = (performance.now() - this.#lastTimeRendered)/60;

        if(difference >= 1.1){                  //1.1 -> smoothest time to animate

            this.#lastTimeRendered = performance.now();      
            this.#frameIndex += 1;

            if(this.#frameIndex > this.#frames.length - 1){
                this.#frameIndex = 0;
            }

            this.#clippingX = this.#frames[this.#frameIndex];
        }
    }
}