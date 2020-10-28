import React from 'react'
import './soundtrackDisplay.css'

export default function SoundtrackDisplay(props){

    return(

        <div className="soundtrackDisplay">
            <div>{props.artist + ' - ' + props.title}</div>
        </div>)
}