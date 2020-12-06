import React, { useEffect } from 'react'

import './play.css'

import { game } from '../assets/scripts/game'
import { store } from '../assets/store/store'

import spaceship from '../assets/img/spaceship.png'


export default function Play(){

    
    const canvasScaler = () => { store.dispatch({ type: 'canvas/Scale' }) }

    useEffect(() => {
        
        canvasScaler()
        game.init()

        window.addEventListener( 'resize', canvasScaler )

        return () => {

            window.removeEventListener( 'resize', canvasScaler )
            game.stop()
        }
    }, []);
    


    return (
        <div className='play' >
            <img id = 'spaceship' src={spaceship} alt='spaceship' />
            <canvas id='gameBoard'></canvas>
        </div>
    )
}