import React from 'react';
import Background from '../components/background';

import { useScores } from '../hooks/useScores';


const styles = {
    container: 'flex flex-col justify-center items-center text-center text-white',
    listItem: 'opacity-60 text-xl mb-3',
    name: 'mr-5'
};

const Highscores = () => {

    const [ scores ] = useScores();

    return (
        <div className={styles.container}>
            <Background>
                <ul>
                    {scores.map ( (score, id) =>{
                        return (
                            <li key={id} className={styles.listItem}>
                                <span className={styles.name}>Name: {score.name}</span>
                                <span>Score: {score.score}</span>
                            </li>
                        );
                    })}
                </ul>
            </Background>
        </div>
    );
};

export default Highscores;