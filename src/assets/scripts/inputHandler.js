import {game} from './game'

function isDown(direction){
    
    return direction.key  === 'w' ||  's'
}

export function handleInput(e){

    switch(e.key) {
    // UP

    case 'w':
        game.spaceship.y =  game.spaceship.y -6
        break

    // DOWN
    case 's':
        game.spaceship.y =  game.spaceship.y +6
        break

    // LEFT
    case 'a':
        game.spaceship.x =  game.spaceship.x -6
        break

    // RIGHT
    case 'd':
        game.spaceship.x =  game.spaceship.x +6
        break
    }
}