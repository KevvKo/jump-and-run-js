import React from 'react'
import './guide.css'

import Background from '../assets/components/background'

export default function Guide(){

    const size = { width: "80%", height: "80%" }

    return(
        <div className='guide'>
            <Background size= { size } />
        </div>
    )
}