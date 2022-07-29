import React from 'react'
import Background from '../components/background'

export default function Guide(){

    const size = { width: "80%", height: "80%" }

    return(
        <div className='guide flex flex-col justify-center items-center text-center text-white'>
            <Background size= { size } />
        </div>
    )
}