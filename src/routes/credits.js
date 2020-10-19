import React from 'react'
import './credits.css'
import Background from '../assets/components/background'

export default function Credits(){
    const content = 
        <div>
            <h1>Credits</h1>
            <h2>Development</h2>
            <p>Kevin Klein</p>
            <h2>Design</h2>
            <p>Kevin Klein</p>
            <h2>Music</h2>
            <p></p>
            <h2></h2>
            <p></p>
            <h2>Participants</h2>
            <p>Benjamin Gypser</p>
            <p>Marius Treichel</p>
        </div>
    
    return (
        <div className='credits'>
            <Background content={content}/>
        </div>
    )
}