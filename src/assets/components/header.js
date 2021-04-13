import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux'
import HeaderButton from './headerButton'
import { useMenuMusic } from './music'
import { store } from '../store/store';
import { game } from '../scripts/services/game'
import { 
    REPLACE_ARTIST_NAME, 
    REPLACE_TITLE_NAME, 
    PLAY_MUSIC, 
    STOP_MUSIC } from '../store/actions/actions'
import './header.css'

function AppHeader() {
    
    let index = 0
    const sounds = useMenuMusic()
    const audioElement = new Audio(sounds[index].file)
  
    audioElement.onended = () =>{
  
      index < sounds.length ? index += 1 : index = 0 
  
      audioElement.src = sounds[index].file
      audioElement.play()
  
      const artist = sounds[index].artist
      const title = sounds[index].track

      store.dispatch(REPLACE_ARTIST_NAME.payload = artist)
      store.dispatch(REPLACE_TITLE_NAME.payload = title)
    }
  
    // functions for the headbuttons
    const toggleMenuMusic = () => {
  
      let button = document.querySelector('.playMusic')
  
      if(!audioElement.paused){
  
        audioElement.pause()
        button.children[0].innerText = 'music_off'
        store.dispatch(STOP_MUSIC)
    
      }else{
        const artist = sounds[index].artist
        const title = sounds[index].track

        audioElement.play()
        button.children[0].innerText = 'music_note'
        store.dispatch(REPLACE_ARTIST_NAME.payload = artist)
        store.dispatch(REPLACE_TITLE_NAME.payload = title)
        store.dispatch(PLAY_MUSIC)
      }
    }

    const togglePauseGame = () => { game.togglePause() }
    const location = useLocation()['pathname']
    const isPaused = useSelector( state => state.game.gameIsPaused)
    const showPause = isPaused && location === '/play'
    const showContinue = !isPaused && location === '/play'
    const showBackToHome = location !== '/' && location !== '/play'

    return(
        <header>
            <div>
            { showBackToHome &&
                <Link to='/' >
                    <HeaderButton icon="arrow_back" />
                </Link>
            }
            { location === '/play' &&
                <Link to='/levelSelection' >
                    <HeaderButton icon="arrow_back" />
                </Link>
            }
            { location === '/play' &&
                <Link to='/' >
                    <HeaderButton icon="home" />
                </Link>
            }
            { showPause &&
                <HeaderButton icon="play_arrow" callback={ togglePauseGame }/>
            }
            { showContinue && !isPaused &&
                <HeaderButton icon="pause" callback={ togglePauseGame }/>
            }
            <HeaderButton icon="music_off" className="playMusic" callback={ toggleMenuMusic } />
            </div>
        </header>

    )
}
export default AppHeader