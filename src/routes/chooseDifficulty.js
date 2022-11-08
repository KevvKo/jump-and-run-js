import React from 'react';
import { store } from '../store/store';
import './chooseDifficulty.css';
import { useNavigate } from "react-router-dom";
import { addDifficulty } from '../store/actions/gameActions';

const styles = {
    list: 'chooseDifficulty flex flex-col cursor-pointer items-center',
    listItem: 'transition duration-100 ease-in-out hover:opacity-70 inline-block list-none text-7xl no-underline text-center'
}

const ChooseDifficulty = () => {

    const difficultys = ['easy', 'normal', 'hard'];
    const navigate = useNavigate();
    const handleClick = (index) => {

        const difficulty = difficultys[index];
        store.dispatch(addDifficulty(difficulty));
        navigate('../play');
    };

    return(
        <ul className={styles.list}>
            <li className={styles.listItem} onClick={() => { handleClick(0); }}>Easy</li>
            <li className={styles.listItem} onClick={() => { handleClick(1); }}>Normal</li>
            <li className={styles.listItem} onClick={() => { handleClick(2); }}>Hard</li>
        </ul>
    );
};

export default ChooseDifficulty;