import React from 'react'
import './pauseBanner.css'

export default function PauseBanner(){

    return(
        <div className="pauseBanner absolute w-3/6 h-4/5 rounded-lg opacity-80 flex justify-center items-center text-white">
            <h1>Paused</h1>
        </div>
    )
}