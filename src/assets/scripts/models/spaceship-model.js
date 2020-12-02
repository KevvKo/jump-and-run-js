import Sprite from './sprite-model'

export default class Spaceship{

    #vx
    #vy
    #ax
    #ay
    #y
    #x
    #sprite

    constructor(x, y, spriteImg){

        this.#vx = 0
        this.#vy = 0
        this.#ax = 0
        this.#ay = 0
        this.#x = x
        this.#y = y
        this.#sprite = new Sprite(
            spriteImg,
            0, 0,
            100, 100, 
            x, y, 
            [0, 100, 200, 300])
    }

    update(){
        this.#sprite.update()
    }

    render(){

        this.update()
        this.#sprite.draw()
    }
}