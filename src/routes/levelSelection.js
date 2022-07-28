import React from 'react'
import Level from '../components/level'
import './levelSelection.css'

export default function LevelSelection(props){
    return(
        <div className="levelSelection">
            <Level></Level>
            {/* <Level></Level>
            <Level></Level> */}
        </div>
    )
}