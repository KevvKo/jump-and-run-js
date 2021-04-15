import { React, useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux'
import HeaderButton from './headerButton'
import { useMenuMusic } from './music'
import { store } from '../store/store';
import { game } from '../scripts/services/game'
import { 
    replaceArtistName, 
    replaceTitleName, 
    stopMusic, 
    playMusic
} from '../store/actions/musicActions'
import './header.css'

function AppHeader() {
    
    let index = 0
    const sounds = useMenuMusic()
    const [audioElement] = useState( new Audio(sounds[index].file) )

    audioElement.onended = () =>{
  
      index < sounds.length ? index += 1 : index = 0 
  
      audioElement.src = sounds[index].file
      audioElement.play()
  
      const artist = sounds[index].artist
      const title = sounds[index].track

      store.dispatch(replaceArtistName(artist))
      store.dispatch(replaceTitleName(title))
    }
  
    // functions for the headbuttons
    const toggleMenuMusic = () => {
  
      let button = document.querySelector('.playMusic')
  
      if(!audioElement.paused){
  
        audioElement.pause()
        button.children[0].innerText = 'music_off'
        store.dispatch(stopMusic())
    
      }else{
        const artist = sounds[index].artist
        const title = sounds[index].track

        audioElement.play()
        button.children[0].innerText = 'music_note'
        store.dispatch(replaceArtistName(artist))
        store.dispatch(replaceTitleName(title))
        store.dispatch(playMusic())
      }
    }

    const togglePauseGame = () => { game.togglePause() }
    const location = useLocation()['pathname']
    const isPaused = useSelector( state => state.game.gameIsPaused)
    const showPause = isPaused && location === '/play'
    const showContinue = !isPaused && location === '/play'
    const showBackToHome = location !== '/' && location !== '/play'

    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            if(e.code === 'KeyO'){
                toggleMenuMusic()
            }
        })
    }, [])

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