import React from 'react'
import './credits.css'
import Background from '../components/background'

export default function Credits(){
    
    const content = 
        <div>
            <h1>Credits</h1>
            <h2>Development</h2>
            <p>Kevin Klein</p>
            <h2>Design</h2>
            <p>Kevin Klein</p>
            <h2>Music</h2>
            <p>Sappheiros</p>
            <p>Known</p>
            <p>Patrick Patrikios</p>
            <p>Unicorn Heads</p>
            <p>The 129ers</p>
            <p>Devon Church</p>
            <p>Coyote Hearing</p>
            <p>Dan Hening</p>
            <p>Jeremy Black</p>
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