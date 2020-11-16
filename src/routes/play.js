import React, { useEffect } from 'react'
import './play.css'

import {game} from '../assets/js/game'

import spaceship from '../assets/img/spaceship.png'

export default function Play(){


    useEffect(() => {

        scaleCanvas()
        game.init()

        return () => {
            game.stop()
        }
    });
    
    const scaleCanvas = () => {
        
        const canvas = document.getElementById('gameBoard')
        const width = window.innerWidth
        const height = window.innerHeight
        const header = document.querySelector('header')
        
        canvas.width = width
        canvas.height = height - header.offsetHeight - 6
    };

    return (
        <div className='play'>
            <img src={spaceship} alt="spaceship" />
            <canvas id='gameBoard'></canvas>
        </div>
    )
}