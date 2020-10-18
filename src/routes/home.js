import React from 'react'
import {Link} from 'react-router-dom'

export default function Home(){
    return (
        <div id='home'>
            <ul>
                <li>
                    <Link to="/game">Game</Link>
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