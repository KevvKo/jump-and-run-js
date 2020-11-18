class Game{

    constructor(){}

    init(){

        console.log("Game initialized.")
        this.start()
    }   

    start(){
        this.canvas = document.getElementById('gameBoard')
        this.context = this.canvas.getContext('2d')
        this.image = document.querySelector('img')

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
        this.context.drawImage(this.image, 0, 0)
    }

}
const game = new Game()
export {game}