import React, { useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Dialog from '../components/dialog';
import { store } from '../store/store';
import { addKeyDown, addKeyUp } from '../store/actions/keyActions';
import { resetGame } from '../store/actions/gameActions';
import { scaleCanvas } from '../store/actions/canvasActions';
import GameContext from '../providers/GameProvider';
const styles = {
    button: 'mr-3 bg-slate-900 py-2 px-4 active:bg-slate-600 hover:bg-slate-800 rounded',
    container: 'flex justify-center flex-col items-center',
    title: 'text-3xl text-center p-5'
};

const Play = () => {    

    const game = useContext(GameContext);
    const canvasScaler = () => { store.dispatch( scaleCanvas() ); };
    const navigate = useNavigate();
    const handleKeyDown = (e) => { store.dispatch( addKeyDown(e.code) ); };
    const handleKeyUp = (e) => { store.dispatch( addKeyUp(e.code) ); };
    const pauseGame = (e) => { if(e.code === 'KeyP') game.togglePause(); };

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
        };
    }, [window, game]);

    const gameIsPaused = useSelector ( state => state.game.gameIsPaused );
    const gameIsOver =  useSelector ( state => state.game.gameIsOver );

    const handleClickRestart = () => {
        store.dispatch(resetGame());
        game.init();
    };

    const handleClickGoHome = () => {
        store.dispatch(resetGame());
        navigate('/');
    };

    return (
        <div className={`play ${styles.container}`} >
            { gameIsPaused &&
                <Dialog>Paused</Dialog> 
            }
            { gameIsOver &&
                <Dialog>
                    <div>
                        <div className={styles.title}>Game Over</div>
                        <div>
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