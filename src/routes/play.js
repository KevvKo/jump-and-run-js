import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Dialog from '../components/dialog';
import { game } from '../scripts/services/game';
import { store } from '../store/store';
import { addKeyDown, addKeyUp } from '../store/actions/keyActions';
import { scaleCanvas } from '../store/actions/canvasActions';

const Play = () => {

    const gameIsOver = false;
    const canvasScaler = () => { store.dispatch( scaleCanvas() ); };

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

    return (
        <div className='play flex justify-center flex-col items-center' >
            { gameIsPaused &&
                <Dialog>Paused</Dialog> 
            }
            { gameIsOver &&
                <Dialog>
                    Game Over
                </Dialog>
            }
            <canvas id='gameBoard'></canvas>
        </div>
    );
};

export default Play;