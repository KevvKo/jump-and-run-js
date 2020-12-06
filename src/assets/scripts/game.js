import Spaceship from './models/spaceship-model'
class Game{

    constructor(){
        this.keys = {}
    }
    init(){

        console.log('Game initialized.')
        this.createSprites()
        this.start()
    }   

    start(){

        this.keyDownHandler = (e) => { this.keys[e.code] = true }
        this.keyUpHandler = (e) => { this.keys[e.code] = false }

        window.addEventListener('keydown', this.keyDownHandler)
        window.addEventListener('keyup', this.keyUpHandler)

        this.canvas = document.getElementById('gameBoard')
        this.context = this.canvas.getContext('2d')

        this.loop = window.requestAnimationFrame(() => this.update())
    }

    update(){
        this.clear()
        this.draw()
        this.loop = window.requestAnimationFrame(() => this.update())
    }

    stop(){
        window.removeEventListener('keydown', this.keyDownHandler)
        window.removeEventListener('keyUp', this.keyUpHandler)
        window.cancelAnimationFrame(this.loop)
    }

    createSprites(){
        const spaceshipImg = document.getElementById('spaceship')
        this.spaceship = new Spaceship(500, 200, spaceshipImg)
    }

    draw(){
        this.spaceship.render()
    }

    clear(){
        this.context.clearRect(0,0,875,504)
    }
}
const game = new Game()
export {game}