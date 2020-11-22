import Spaceship from './models/spaceship'
class Game{

    constructor(){
        this.spaceship = new Spaceship()
    }

    init(){

        console.log("Game initialized.")
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

    draw(){

        this.image = document.querySelector('img')
        this.context.drawImage(this.image, 0, 0, 100, 100, 0, 0, 100, 100)
    }

}
const game = new Game()
export {game}