import React, { useEffect } from 'react'
import './play.css'

import {game} from '../assets/js/game'

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
            <canvas id='gameBoard'></canvas>
        </div>
    )
}