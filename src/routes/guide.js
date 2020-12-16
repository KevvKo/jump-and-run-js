import { render } from '@testing-library/react'
import React from 'react'
import './guide.css'

import Background from '../assets/components/background'

export default function Guide(){
    return(
        <div className='guide'>
            <Background />
        </div>
    )
}