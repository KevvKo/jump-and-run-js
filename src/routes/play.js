import React, { useEffect, useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from "react-router-dom";
import Dialog from '../components/dialog';
import { store } from '../store/store';
import { addKeyDown, addKeyUp } from '../store/actions/keyActions';
import { resetGame } from '../store/actions/gameActions';
import { scaleCanvas } from '../store/actions/canvasActions';
import GameContext from '../providers/GameProvider';
import { useMenuMusic } from '../scripts/services/music';
import { 
    replaceArtistName, 
    replaceTitleName, 
    stopMusic, 
    playMusic
} from '../store/actions/musicActions';

const styles = {
    button1: 'mr-3 mb-3 bg-slate-900 py-2 px-4 active:bg-slate-600 hover:bg-slate-800 rounded',
    button2: 'mb-3 bg-slate-900 py-2 px-4 active:bg-slate-600 hover:bg-slate-800 rounded text-center',
    buttonBar: 'mt-7',
    container: 'flex justify-center flex-col items-center',
    dialogContainer: 'mx-6 px-8 flex flex-col',
    highscore: 'text-center mb-5 text-2xl', 
    title: 'text-4xl text-center p-5',
};

const Play = () => {    
    // let index = 0;
    // const sounds = useMenuMusic();
    // const [audioElement] = useState( new Audio(sounds[index].file) );
    // const game = useContext(GameContext);

    // audioElement.onended = () =>{
  
    //   index < sounds.length ? index += 1 : index = 0;
  
    //   audioElement.src = sounds[index].file;
    //   audioElement.play();
  
    //   const artist = sounds[index].artist;
    //   const title = sounds[index].track;

    //   store.dispatch(replaceArtistName(artist));
    //   store.dispatch(replaceTitleName(title));
    // };
  
    // const toggleMenuMusic = () => {
  
    //   let button = document.querySelector('.playMusic');
  
    //   if(!audioElement.paused){
  
    //     audioElement.pause();
    //     button.children[0].innerText = 'music_off';
    //     store.dispatch(stopMusic());
    
    //   }else{
    //     const artist = sounds[index].artist;
    //     const title = sounds[index].track;

    //     audioElement.play();
    //     button.children[0].innerText = 'music_note';
    //     store.dispatch(replaceArtistName(artist));
    //     store.dispatch(replaceTitleName(title));
    //     store.dispatch(playMusic());
    //   }
    // };

    // const togglePauseGame = () => { game.togglePause(); };
    // const isPaused = useSelector( state => state.game.gameIsPaused);
    // const showPause = isPaused && location === '/play';
    // const showContinue = !isPaused && location === '/play';

    // useEffect(() => {
    //     window.addEventListener('keydown', (e) => {
    //         if(e.code === 'KeyO'){
    //             toggleMenuMusic();
    //         }
    //     });
    // }, [toggleMenuMusic]);

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
                    <div className={styles.dialogContainer}>
                        <h3 className={styles.title}>Game Paused</h3>
                        <Link className={styles.button2} to='/'>Back to Menu</Link>
                        <Link className={styles.button2} to='/chooseDifficulty'>Difficulty Selection</Link>
                        <button className={styles.button2} onClick={handleClickRestart}>Restart Game</button>
                        <button className={styles.button2} onClick={handleClickRestart}>Sound on/off</button>
                    </div>
                </Dialog> 
            }
            { gameIsOver &&
                <Dialog>
                    <div>
                        <div className={styles.title}>Game Over</div>
                        <div className={styles.highscore}>Punkte: {game.highscore}</div>
                        <div className={styles.buttonBar}>
                            <button  className={styles.button1} onClick={handleClickGoHome}>
                                Zur Startseite
                            </button>
                            <button className={styles.button1} onClick={handleClickRestart}>
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