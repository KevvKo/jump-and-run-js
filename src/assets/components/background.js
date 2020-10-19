import React from 'react'
import './background.css'

export default function Background(props){
    console.log(props.content)
    return(
        <div className="background">
            {props.content}
        </div>
    )
}