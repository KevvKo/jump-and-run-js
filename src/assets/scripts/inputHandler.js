import {game} from './game'

function isDown(direction){
    
    return direction.key  === 'w' ||  's'
}

export function handleInput(e){

    switch(e.key) {
    // UP

    case 'w':
        game.spaceship.velY -= 6
        break

    // DOWN
    case 's':
        game.spaceship.velY += 6
        break

    // LEFT
    case 'a':
        game.spaceship.velX -= 6
        break

    // RIGHT
    case 'd':
        game.spaceship.velX += 6
        break

    default:
        break
    }

}