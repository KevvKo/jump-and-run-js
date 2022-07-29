import React from 'react';
import {Link} from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <div className='home flex flex-col justify-center items-center'>         

            <h1 className='text-9xl'>Final Space Wars</h1>
            <ul className='list-none p-0 w-48'>
                <li className='flex justify-center'>
                    <Link 
                        className='transition duration-100 ease-in-out hover:opacity-70 inline-block list-none text-7xl no-underline text-center' 
                        to="/levelSelection"
                    >Start</Link>
                </li>
                <li className='flex justify-center'>
                    <Link 
                        className='transition duration-100 ease-in-out hover:opacity-70 inline-block list-none text-7xl no-underline text-center' 
                        to='/options'
                    >Options</Link>
                </li>
                <li className='flex justify-center'>
                    <Link 
                        className='transition duration-100 ease-in-out hover:opacity-70 inline-block list-none text-7xl no-underline text-center' 
                        to="/guide"
                    >Guide</Link>
                </li>
                <li className='flex justify-center'>
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