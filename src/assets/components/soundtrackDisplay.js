import React from 'react'
import './soundtrackDisplay.css'

//renders a sliding text with the current played song

export default function SoundtrackDisplay(props){

    return(

        <div className="soundtrackDisplay">
            {!props.audio.paused && <div>{props.artist + ' - ' + props.title}</div> }
        </div>  
    )
}