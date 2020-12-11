import Spaceship from './models/spaceship-model'
import { store } from '../store/store'
class Game{

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

        const is = store.getState().game.gameIsPaused

        this.clear()
        this.spaceship.update()
        this.draw()
        if(!is) this.loop = window.requestAnimationFrame(() => this.update())

    }

    stop(){ window.cancelAnimationFrame(this.loop) }

    createSprites(){

        const spaceshipImg = document.getElementById('spaceship')
        const width = store.getState().canvas.width
        const height = store.getState().canvas.height

        this.spaceship = new Spaceship( (width / 2) - 50, (height / 2) - 50, spaceshipImg) //minus 50px -> half of width from the rendered sprite to center the image in the canvas
    }

    draw(){ this.spaceship.render() }

    clear(){
        const width = store.getState().canvas.width
        const height = store.getState().canvas.height

        this.context.clearRect(0,0, width, height)
    }
}
const game = new Game()
export {game}