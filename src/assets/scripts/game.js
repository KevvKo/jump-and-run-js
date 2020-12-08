import Spaceship from './models/spaceship-model'
import {store} from '../store/store'
class Game{

    init(){
        
        console.log('Game initialized.')
        this.createSprites()
        this.start()
    }   

    start(){

        this.keyDownHandler = (e) => { this.key = e.key }
        this.keyUpHandler = (e) => { this.key = undefined }

        window.addEventListener('keydown', this.keyDownHandler)
        window.addEventListener('keyup', this.keyUpHandler)

        this.canvas = document.getElementById('gameBoard')
        this.context = this.canvas.getContext('2d')

        this.loop = window.requestAnimationFrame(() => this.update())
    }

    update(){
        this.spaceship.move(this.key)
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
        const width = store.getState().canvas.width
        const height = store.getState().canvas.height

        this.context.clearRect(0,0, width, height)
    }
}
const game = new Game()
export {game}