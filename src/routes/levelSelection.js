import React from 'react'

import './levelSelection.css'

import Level from '../assets/components/level'

export default function LevelSelection(props){
    return(
        <div className="levelSelection">
            <div>
                <Level></Level>
                <Level></Level>
                <Level></Level>
            </div>
            <div>
                <Level></Level>
                <Level></Level>
                <Level></Level>
            </div>
            <div>
                <Level></Level>
                <Level></Level>
                <Level></Level>
            </div>
        </div>
    )
}