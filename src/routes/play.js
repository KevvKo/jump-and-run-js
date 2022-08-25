import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PauseBanner from '../components/pauseBanner';
import { game } from '../scripts/services/game';
import { store } from '../store/store';
import { addKeyDown, addKeyUp } from '../store/actions/keyActions';
import { scaleCanvas } from '../store/actions/canvasActions';

const Play = () => {

    const canvasScaler = () => { store.dispatch( scaleCanvas() ); };

    useEffect(() => {
        canvasScaler();
        game.init();

        const handleKeyDown = (e) => { store.dispatch( addKeyDown(e.code) ); };
        const handleKeyUp = (e) => { store.dispatch( addKeyUp(e.code) ); };
        const pauseGame = (e) => { if(e.code === 'KeyP') game.togglePause(); };

        window.addEventListener( 'keydown', handleKeyDown );
        window.addEventListener( 'keydown', pauseGame );
        window.addEventListener( 'keyup', handleKeyUp );
        window.addEventListener( 'resize', canvasScaler );

        return () => {

            window.removeEventListener( 'keydown', handleKeyDown );
            window.removeEventListener( 'keydown', pauseGame );
            window.removeEventListener( 'keyup', handleKeyUp );
            window.removeEventListener( 'resize', canvasScaler );
            game.stop();
        };
    }, []);


    const gameIsPaused = useSelector ( state => state.game.gameIsPaused );
    
    return (
        <div className='play flex justify-center flex-col items-center' >
            { gameIsPaused &&
                <PauseBanner />
            }
            <canvas id='gameBoard'></canvas>
        </div>
    );
};

export default Play;