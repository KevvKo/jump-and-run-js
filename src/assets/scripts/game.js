import Spaceship from './models/spaceship-model'
class Game{

    constructor(){
        this.keys = []
    }
    init(){

        console.log('Game initialized.')
        this.createSprites()
        this.start()
    }   

    start(){
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