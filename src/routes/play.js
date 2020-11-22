import React, { useEffect } from 'react'
import './play.css'

import {game} from '../assets/scripts/game'

import spaceship from '../assets/img/spaceship.png'


export default function Play(){

    useEffect(() => {
        
        const rescaleCanvas = () => {
        
            const canvas = document.getElementById('gameBoard')
            const width = window.innerWidth
            const height = window.innerHeight
            const header = document.querySelector('header')
            
            canvas.width = width
            canvas.height = height - header.offsetHeight - 6
            console.log('canvas-width: ' + width)
            console.log('canvas-height: ' + height)
        };

        rescaleCanvas()
        game.init()

        window.addEventListener('resize', rescaleCanvas)
        
        return () => {
            game.stop()
        }
    });
    


    return (
        <div className='play' >
            <img src={spaceship} alt="spaceship" />
            <canvas id='gameBoard'></canvas>
        </div>
    )
}