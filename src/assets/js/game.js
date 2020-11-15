class Game{

    constructor(){}

    init(){

        this.canvas = document.getElementById('gameBoard')
        this.context = this.canvas.getContext('2d')
        
        console.log("Game initialized.")
        this.start()
    }   

    start(){
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
    
    }

}
const game = new Game()
export {game}