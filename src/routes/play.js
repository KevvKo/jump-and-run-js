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

        const handleKeyDown = (e) => { store.dispatch({type: 'keys/KeyDown', payload: e.code}) }
        const handleKeyUp = (e) => { store.dispatch({type: 'keys/KeyUp', payload: e.code}) }
        const pauseGame = (e) => { if(e.code === "Space") game.togglePause() }

        window.addEventListener( 'keydown', handleKeyDown )
        window.addEventListener( 'keydown', pauseGame )
        window.addEventListener( 'keyup', handleKeyUp )
        window.addEventListener( 'resize', canvasScaler )

        return () => {

            window.removeEventListener( 'keydown', handleKeyDown )
            window.removeEventListener( 'keydown', pauseGame )
            window.removeEventListener( 'keyup', handleKeyUp )
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