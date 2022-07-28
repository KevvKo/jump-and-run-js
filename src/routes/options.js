import React from 'react'
import Background from '../components/background'

const Options = () => {

    const content = 
    <div>
        <h1 class="text-6xl opacity-60">Options</h1>
    </div>

    return (
        <div className='options flex justify-center flex-col items-center text-center text-white'>
            <Background content={content} />            
        </div>
    )
}

export default Options;