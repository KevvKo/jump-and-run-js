import React from 'react'
import { Link } from 'react-router-dom'

import './level.css'

export default function Level(props){

    return(
        <Link to='/play'>
            <div className="level">
                <img src={props.src} alt={props.alt}></img>
            </div>
        </Link>
    )
}