import Spaceship from '../models/spaceship-model'
import { store } from '../../store/store'
import {continueGame, pauseGame } from '../../store/actions/gameActions'
class Game{

    /**
     * @public
     */
    init(){
        
        console.info('Game initialized.')
        this.createSprites()
        this.start()
    }  

    /**
     * @public
     */
    start(){

        this.canvas = document.getElementById('gameBoard')
        this.context = this.canvas.getContext('2d')
        this.loop = window.requestAnimationFrame(() => this.update())
    }

    /**
     * @public
     */
    update(){
        
        this.clear()
        this.spaceship.update()
        this.draw()

        const gameIsPaused = store.getState().game.gameIsPaused
        if(!gameIsPaused) this.loop = window.requestAnimationFrame(() => this.update())

    }

    /**
     * @public
     */
    togglePause(){

        const gameIsPaused = store.getState().game.gameIsPaused
        
        if(!gameIsPaused) store.dispatch(pauseGame())
        else {

            if(gameIsPaused) store.dispatch(continueGame())
            this.update()
        }
    }

    /**
     * @public  
     */
    stop(){ window.cancelAnimationFrame(this.loop) }

    /**
     * @public
     */
    createSprites(){

        const spaceshipImg = document.getElementById('spaceship')
        const width = store.getState().canvas.width
        const height = store.getState().canvas.height

        this.spaceship = new Spaceship( (width / 2) - 50, (height / 2) - 50, spaceshipImg) //minus 50px -> half of width from the rendered sprite to center the image in the canvas
    }

    /**
     * @public
     */
    draw(){ this.spaceship.render() }

    /**
     * @public
     */
    clear(){
        const width = store.getState().canvas.width
        const height = store.getState().canvas.height

        this.context.clearRect(0,0, width, height)
    }
}
const game = new Game()
export {game}