import React, { useEffect } from 'react'
import './play.css'

import {game} from '../assets/scripts/game'
import {store} from '../assets/store/store'
import {handleInput} from '../assets/scripts/inputHandler'

import spaceship from '../assets/img/spaceship.png'


export default function Play(){

    const keys = []

    useEffect(() => {
       
        store.dispatch({type: 'canvas/scaleWidth'})
        store.dispatch({type: 'canvas/scaleHeight'})
        game.init()

        window.addEventListener('resize', () => {
            store.dispatch({type: 'canvas/scaleWidth'})
            store.dispatch({type: 'canvas/scaleHeight'})
        })

        window.addEventListener('keydown', (e) => { keys[e.code] = true})
        window.addEventListener('keydown', (e) => { keys[e.code] = false })

        return () => {

            window.removeEventListener('keydown')
            window.removeEventListener('keyup')
            game.stop()
        }
    });
    


    return (
        <div className='play' >
            <img id = 'spaceship' src={spaceship} alt='spaceship' />
            <canvas id='gameBoard'></canvas>
        </div>
    )
}