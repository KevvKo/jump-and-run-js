import React, {useEffect} from 'react'
import './game.css'

export default function Game(){

    useEffect(() => {

        const audioElement = document.querySelector('audio');
        audioElement.play()
      })
    
    return (
        <div className='game'>
        </div>
    )
}