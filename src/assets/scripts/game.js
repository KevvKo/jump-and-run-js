import Sprite from './models/sprite'
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

        this.clear()
        this.draw()
        this.loop = window.requestAnimationFrame(() => this.update())
    }

    stop(){
        window.cancelAnimationFrame(this.loop)
    }

    createSprites(){
        const spaceshipImg = document.getElementById('spaceship')
        this.spaceship = new Sprite(
            spaceshipImg,
             0, 0,
            100, 100, 
            500, 200, 
            [0, 100, 200, 300])
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