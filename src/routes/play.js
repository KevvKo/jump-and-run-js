import React, { useEffect } from 'react'
import './play.css'

import {game} from '../assets/scripts/game'

import spaceship1 from '../assets/img/spaceship1.png'
import spaceship2 from '../assets/img/spaceship2.png'
import spaceship3 from '../assets/img/spaceship3.png'
import spaceship4 from '../assets/img/spaceship4.png'

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
            <img src={spaceship1} alt="spaceship" />
            <canvas id='gameBoard'></canvas>
        </div>
    )
}