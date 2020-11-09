import React from 'react'

import './level.css'

export default function Level(props){
    return(
        <div className="level">
            <img src={props.src} alt={props.alt}></img>
        </div>
    )
}