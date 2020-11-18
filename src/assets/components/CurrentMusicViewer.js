import React from 'react'

export default function CurrentMusicViewer(props){
    return(
        <div className="currentMusicViewer">
            <span>{props.sound.artist + " - " + props.sound.track}</span>
        </div>
    )
}