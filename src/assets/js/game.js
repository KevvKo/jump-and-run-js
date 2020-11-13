class Game{

    constructor(){}

    init(){
        this.canvas = document.getElementById('gameBoard')
        this.context = this.canvas.getContext('2d')
        this.draw()
    }

    start(){}

    update(){}

    draw(){}
}
const game = new Game()
export {game}