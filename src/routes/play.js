import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'

import './play.css'

import {game} from '../assets/scripts/game'
import {store} from '../assets/store/store'

import spaceship from '../assets/img/spaceship.png'


export default function Play(){

    const keys = useSelector (state => state.keys)

    useEffect(() => {
       
        store.dispatch({ type: 'canvas/scaleWidth' })
        store.dispatch({ type: 'canvas/scaleHeight' })
        game.init()

        window.addEventListener('resize', () => {
            store.dispatch({ type: 'canvas/scaleWidth' })
            store.dispatch({ type: 'canvas/scaleHeight' })
        })

        window.addEventListener('keydown', (e) => {
            store.dispatch({ type:'keys/KEY_IS_DOWN' , payload:  e.code } )     
        })
        window.addEventListener('keyup', (e) => {
            store.dispatch({ type:'keys/KEY_IS_UP' , payload: e.code })     
        })

        return () => {

            // window.removeEventListener('keydown')
            // window.removeEventListener('keyup')
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