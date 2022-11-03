import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useMenuMusic } from '../scripts/services/music';
import { store } from '../store/store';
import { 
    replaceArtistName, 
    replaceTitleName, 
    stopMusic, 
    playMusic
} from '../store/actions/musicActions';
import GameContext from '../providers/GameProvider';

function AppHeader() {

    const location = useLocation()['pathname'];

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

    return(
        <header className='absolute top-0 p-2.5 z-10 w-full'>
            { location !== '/play' && location !== '/' &&
                <Link className='text-slate-300 underline' to='/' >
                    <span className="material-icons text-4xl">
                        arrow_back
                    </span>
                </Link>
            }
        </header>
    );
}
export default AppHeader;