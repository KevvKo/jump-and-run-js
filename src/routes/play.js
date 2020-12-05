import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'

import './play.css'

import { game } from '../assets/scripts/game'
import { store } from '../assets/store/store'

import spaceship from '../assets/img/spaceship.png'


export default function Play(){

    const keys = useSelector (state => state.keys)
    
    const canvasScaler = () => { store.dispatch({ type: 'canvas/Scale' }) }
    const keyDownHandler = (e) => { store.dispatch({ type: 'keys/KEY_IS_DOWN' , payload: e.code }) }
    const keyUpHandler= (e) => { store.dispatch({ type: 'keys/KEY_IS_UP',  payload: e.code }) }

    useEffect(() => {
        
        canvasScaler()
        game.init()

        window.addEventListener( 'resize', canvasScaler )
        window.addEventListener( 'keydown', keyDownHandler )
        window.addEventListener( 'keyup',  keyUpHandler )

        return () => {
            window.removeEventListener( 'keydown',  keyDownHandler )
            window.removeEventListener( 'keyup', keyUpHandler )
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