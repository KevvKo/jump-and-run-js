import React from 'react';
import './chooseDifficulty.css';
import { useNavigate } from "react-router-dom";

const ChooseDifficulty = () => {

    const difficultys = ['easy', 'normal', 'hard'];
    const navigate = useNavigate();
    const handleClick = (difficulty) => {

        navigate('../play');
    };

    return(
        <ul className="chooseDifficulty flex flex-col cursor-pointer items-center">
            <li className='transition duration-100 ease-in-out hover:opacity-70 inline-block list-none text-7xl no-underline text-center' onClick={() => { handleClick(0); }}>Easy</li>
            <li className='transition duration-100 ease-in-out hover:opacity-70 inline-block list-none text-7xl no-underline text-center' onClick={() => { handleClick(1); }}>Normal</li>
            <li className='transition duration-100 ease-in-out hover:opacity-70 inline-block list-none text-7xl no-underline text-center' onClick={() => { handleClick(2); }}>Hard</li>
        </ul>
    );
};

export default ChooseDifficulty;