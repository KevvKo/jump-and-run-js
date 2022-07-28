import React from 'react'
import Background from '../components/background'
import './options.css'

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