import React from 'react';
import Background from '../components/background';

import { useScores } from '../hooks/useScores';


const styles = {
    container: 'flex flex-col justify-center items-center text-center text-white',
    listItem: 'opacity-60 text-xl mb-3',
    name: 'mr-5',
    table: 'relative m-auto',
    tableCell: 'p-4',
    tableHeader: 'text-xl',
    tableHeadCell: 'px-8'
};

const Highscores = () => {

    const [ scores ] = useScores();

    return (
        <div className={styles.container}>
            <Background>
                <table className={styles.table}>
                    <thead className={styles.tableHeader}>
                        <tr>
                            <th className={styles.tableHeadCell}>Name</th>
                            <th className={styles.tableHeadCell}>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scores.map ( (score, id) =>{
                            return (
                                <tr key={id} className={styles.listItem}>
                                    <td className={styles.tableCell}>{score.name}</td>
                                    <td className={styles.tableCell}>{score.score}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Background>
        </div>
    );
};

export default Highscores;