import React, { useEffect } from 'react'
import './play.css'

import {game} from '../assets/scripts/game'
import {store} from '../assets/store/store'

import spaceship from '../assets/img/spaceship.png'


export default function Play(){

    useEffect(() => {
       
        store.dispatch({type: 'canvas/scaleWidth'})
        store.dispatch({type: 'canvas/scaleHeight'})
        game.init()

        window.addEventListener('resize', () => {
            store.dispatch({type: 'canvas/scaleWidth'})
            store.dispatch({type: 'canvas/scaleHeight'})
        })
        
        return () => {
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