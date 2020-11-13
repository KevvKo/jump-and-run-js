import React from 'react'

import './levelSelection.css'

import Level from '../assets/components/level'

export default function LevelSelection(props){
    return(
        <div className="levelSelection">
            <Level></Level>
            {/* <Level></Level>
            <Level></Level> */}
        </div>
    )
}