import React, { useState } from 'react';
import './App.css';
import Home from './routes/home'
import LevelSelection from './routes/levelSelection'
import Play from './routes/play'
import Options from './routes/options'
import Credits from './routes/credits'
import Guide from './routes/guide'

import StarBackground from './assets/components/starBackground'
import HeaderButton from './assets/components/headerButton'
import SoundtrackDisplay from './assets/components/soundtrackDisplay'
import { useMenuMusic } from './assets/components/music'

import {
  useLocation,
  Switch,
  Link,
  Route
} from "react-router-dom";
import { store } from './assets/store/store';
import { game } from './assets/scripts/game'



/* TO DO'S: 
  
  implement ressource loading and availability
  refactor store

*/

function App() {

  const sounds = useMenuMusic()
  const [musicPlays, setMusicPlays] = useState(false)
  const [artist, setArtist] = useState('')
  const [title, setTitle] = useState('')

  let index = 0
  const [audioElement] = useState(new Audio(sounds[index].file))

  audioElement.onended = () =>{

    index < sounds.length ? index += 1 : index = 0 

    audioElement.src = sounds[index].file
    audioElement.play()

    setArtist(sounds[index].artist)
    setTitle(sounds[index].track)
  }

  // functions for the headbuttons
  const toggleMenuMusic = () => {

    let button = document.querySelector('.playMusic')

    if(!audioElement.paused){

      audioElement.pause()
      button.children[0].innerText = 'music_off'

      setMusicPlays(false)
  
    }else{
      
      audioElement.play()
      button.children[0].innerText = 'music_note'

      setMusicPlays(true)
      setArtist(sounds[index].artist)
      setTitle(sounds[index].track)
    }
  }
  
  const togglePauseGame = () => {

    const gameIsPaused = store.getState().game.gameIsPaused

    if(!gameIsPaused) store.dispatch({ type: 'game/PauseGame'})
    else{

      store.dispatch({ type: 'game/ContinueGame'})
      game.update()

    }
  }

  let location = useLocation()['pathname']

  return (
    <div className="App">

      <StarBackground />
             
      <header>

        { location !== '/' && location !== '/play' &&
            <Link to='/' >
                <HeaderButton icon="arrow_back" />
            </Link>
        }

        { location !== '/' && location !== '/levelSelection' &&
            <Link to='/levelSelection' >
                <HeaderButton icon="arrow_back" />
            </Link>
        }

        { location !== '/' && location !== '/levelSelection' &&
            <Link to='/' >
              <HeaderButton icon="home" />
            </Link>
        }

        <HeaderButton icon="music_off" className="playMusic" callback={ toggleMenuMusic } />

        { location === '/play'  &&
          <HeaderButton icon="pause" callback={ togglePauseGame }/>
        } 

      </header>

      <Switch>
        <Route exact path="/" children={<Home />} />
        <Route path="/levelSelection" children={<LevelSelection />} />
        <Route path="/play" children={<Play />} />
        <Route path="/options" children={<Options />} />
        <Route path="/credits" children={<Credits />} />
        <Route path="/guide" children={<Guide />} />
      </Switch>

      <footer>
          <a href='https://github.com/KevvKo/jump-and-run-js'>@KevvKo</a>
          <SoundtrackDisplay artist={artist} title={title} audio={audioElement}/>
        </footer>
    </div>
  );
}

export default App;
