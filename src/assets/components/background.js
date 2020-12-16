import React from 'react'
import './background.css'

export default function Background(props){

    //default style for the component
    let size = { width: '40%', height: '70vh' }

    //overwrite the default values
    if(props.size){
        size = props.size
    }

    return(
        <div className="background" style={ size }>
            {props.content}
        </div>
    )
}