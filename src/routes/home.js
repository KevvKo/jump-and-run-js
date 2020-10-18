import React from 'react'
import {Link} from 'react-router-dom'
import './home.css'

export default function Home(){
    return (
        <div className='home'>
            <h1>Sticky Jump</h1>
            <ul>
                <li>
                    <Link to="/game">Start</Link>
                </li>
                <li>
                    <Link to='/options'>Options</Link>
                </li>
                <li>
                    <Link to="/credits">Credits</Link>
                </li>
            </ul>
        </div>
    )
}