import React, { useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from "react-router-dom";
import Dialog from '../components/dialog';
import { store } from '../store/store';
import { addKeyDown, addKeyUp } from '../store/actions/keyActions';
import { resetGame } from '../store/actions/gameActions';
import { scaleCanvas } from '../store/actions/canvasActions';
import GameContext from '../providers/GameProvider';

const styles = {
    button: 'mr-3 mb-3 bg-slate-900 py-2 px-4 active:bg-slate-600 hover:bg-slate-800 rounded',
    highscore: 'text-center mb-5 text-2xl', 
    container: 'flex justify-center flex-col items-center',
    title: 'text-4xl text-center p-5',
    buttonBar: 'mt-7',
};

const Play = () => {    

    const game = useContext(GameContext);
    const navigate = useNavigate();
    const gameIsPaused = useSelector ( state => state.game.gameIsPaused );
    const gameIsOver =  useSelector ( state => state.game.gameIsOver );

    const canvasScaler = () => { store.dispatch( scaleCanvas() ); };
    const handleKeyDown = (e) => { store.dispatch( addKeyDown(e.code) ); };
    const handleKeyUp = (e) => { store.dispatch( addKeyUp(e.code) ); };

    const pauseGame = (e) => { 
        const pauseKeyIsPressed = e.code === 'KeyP' || e.code === 'Escape';
        const gameIsNotOver = !store.getState().game.gameIsOver;
        if(pauseKeyIsPressed && gameIsNotOver) game.togglePause();
     };

    useEffect(() => {
        canvasScaler();
        game.init();
        window.addEventListener( 'keydown', handleKeyDown );
        window.addEventListener( 'keydown', pauseGame );
        window.addEventListener( 'keyup', handleKeyUp );
        window.addEventListener( 'resize', canvasScaler );

    }, []);


    useEffect(() => {
        return () => {
            window.removeEventListener( 'keydown', handleKeyDown );
            window.removeEventListener( 'keydown', pauseGame );
            window.removeEventListener( 'keyup', handleKeyUp );
            window.removeEventListener( 'resize', canvasScaler );
            game.stop();
        
            if(gameIsPaused) game.togglePause();
        };
    }, [window, game]);

    const handleClickRestart = () => {
        store.dispatch(resetGame());
        if(gameIsPaused) game.togglePause();
        game.init();
    };

    const handleClickGoHome = () => {
        store.dispatch(resetGame());
        navigate('/');
    };

    return (
        <div className={`play ${styles.container}`} >
            { gameIsPaused &&
                <Dialog>
                    <h3 className={styles.title}>Game Paused</h3>
                    <Link className={styles.button} to='/'>Menu</Link>
                    <Link className={styles.button} to='/chooseDifficulty'>Difficulty Selection</Link>
                    <button className={styles.button} onClick={handleClickRestart}>Restart</button>
                </Dialog> 
            }
            { gameIsOver &&
                <Dialog>
                    <div>
                        <div className={styles.title}>Game Over</div>
                        <div className={styles.highscore}>Punkte: {game.highscore}</div>
                        <div className={styles.buttonBar}>
                            <button  className={styles.button} onClick={handleClickGoHome}>
                                Zur Startseite
                            </button>
                            <button className={styles.button} onClick={handleClickRestart}>
                                Neuer Versuch
                            </button>
                        </div>
                    </div>
                </Dialog>
            }
            <canvas id='gameBoard'></canvas>
        </div>
    );
};

export default Play;