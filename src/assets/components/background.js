import React from 'react'
import './background.css'

export default function Background(props){

    return(
        <div className="background">
            {props.content}
        </div>
    )
}