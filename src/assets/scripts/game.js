import Sprite from './models/sprite'
class Game{

    init(){

        console.log("Game initialized.")
        this.createSprites()
        this.start()
    }   

    start(){
        this.canvas = document.getElementById('gameBoard')
        this.context = this.canvas.getContext('2d')

        this.loop = window.requestAnimationFrame(() => this.update())
    }

    update(){
  
        this.draw()
        this.loop = window.requestAnimationFrame(() => this.update())
    }

    stop(){
        window.cancelAnimationFrame(this.loop)
    }

    createSprites(){
        const spaceshipImg = document.getElementById('spaceship')
        this.spaceship = new Sprite(spaceshipImg, 0, 0, 100, 100, 10, 10, 100, 400)
    }

    draw(){

        this.spaceship.draw()
    }

}
const game = new Game()
export {game}