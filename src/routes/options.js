import React from 'react'
import './options.css'
import Background from '../assets/components/background'

export default function Options(){

    const content = 
    <div>
        <h1>Options</h1>
    </div>

    return (
        <div className='options'>
            <Background content={content} />            
        </div>
    )
}