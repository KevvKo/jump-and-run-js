import React, { useEffect } from 'react'
import './game.css'

export default function Game(){


    useEffect(() => {

        const canvas = document.getElementById('gameBoard')
        const width = window.innerWidth
        const height = window.innerHeight
        const header = document.querySelector('header')
        
        canvas.width = width
        canvas.height = height - header.offsetHeight - 6
    })
    

    return (
        <div className='game'>
            <canvas id="gameBoard"></canvas>
        </div>
    )
}