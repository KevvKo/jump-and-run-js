import React from 'react';
import {Link} from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <div className='home flex flex-col justify-center items-center'>         

            <h1 className='text-9xl'>Final Space Asteroids</h1>
            <ul className='list-none p-0 w-48 mt-8'>
                <li className='flex justify-center'>
                    <Link 
                        className='transition duration-100 ease-in-out hover:opacity-70 inline-block list-none text-7xl no-underline text-center' 
                        to="/chooseDifficulty"
                    >Start</Link>
                </li>
                <li className='flex justify-center mt-4'>
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