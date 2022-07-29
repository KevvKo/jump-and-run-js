import React from 'react'
import { Link } from 'react-router-dom'

export default function Level(props){

    return(
        <Link to='/play'>
            <div className="level bg-black m-2.5 rounded-lg w-80 h-60 hover:cursor-pointer">
                <img src={props.src} alt={props.alt}></img>
            </div>
        </Link>
    )
}