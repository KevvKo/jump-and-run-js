import React from 'react';
import {Link} from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <div className='home flex flex-col justify-center items-center'>         

            <h1 className='text-9xl'>Final Space Asteroids</h1>
            <ul className='flex flex-col list-none p-0 mt-8'>
                <li className='p-1 flex justify-center'>
                    <Link 
                        className='transition duration-100 ease-in-out hover:opacity-70 inline-block list-none text-7xl no-underline text-center' 
                        to="/chooseDifficulty"
                    >Start</Link>
                </li>
                <li className='justify-center mt-1 p-1'>
                    <Link 
                        className='transition duration-100 ease-in-out hover:opacity-70 text-7xl text-center' 
                        to="/highscores"
                    >Highscores</Link>
                </li>
                <li className='flex justify-center mt-1 p-1'>
                    <Link 
                        className='transition duration-100 ease-in-out hover:opacity-70 inline-block list-none text-7xl no-underline text-center' 
                        to="/credits"
                    >Credits</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;