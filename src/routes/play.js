import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './play.css'
import PauseBanner from '../assets/components/pauseBanner'

import { game } from '../assets/scripts/services/game'
import { store } from '../assets/store/store'
import { addKeyDown, addKeyUp } from '../assets/store/actions/keyActions'
import spaceship from '../assets/img/spaceship.png'


export default function Play(){

    
    const canvasScaler = () => { store.dispatch({ type: 'canvas/Scale' }) }

    useEffect(() => {
        
        canvasScaler()
        game.init()

        const handleKeyDown = (e) => { store.dispatch( addKeyDown(e.code) )}
        const handleKeyUp = (e) => { store.dispatch( addKeyUp(e.code) )}
        const pauseGame = (e) => { if(e.code === "KeyP") game.togglePause() }

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

    const gameIsPaused = useSelector ( state => state.game.gameIsPaused )
    return (
        <div className='play' >
            <img id = 'spaceship' src={ spaceship } alt='spaceship' />
            { gameIsPaused &&
                <PauseBanner />
            }
            <canvas id='gameBoard'></canvas>
        </div>
    )
}