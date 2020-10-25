import React, { useState } from 'react';
import './App.css';
import Home from './routes/home'
import Game from './routes/game'
import Options from './routes/options'
import Credits from './routes/credits'
import Guide from './routes/guide'

import StarBackground from './assets/components/starBackground'
import HeaderButton from './assets/components/headerButton'
import {useMenuMusic} from './assets/components/music'

import {
  useLocation,
  Switch,
  Link,
  Route
} from "react-router-dom";


function App() {

  const [musicPlays, setMusicPlays] = useState(false)
  const sounds = useMenuMusic()
  let index = 0
  const [audioElement] = useState(new Audio(sounds[index].file))

  audioElement.onended = () =>{

    index < sounds.length ? index += 1 : index = 0 

    audioElement.src = sounds[index].file
    audioElement.play()
  }

  const toggleMenuMusic = () => {

    let button = document.querySelector('.playMusic')
    
    if(musicPlays){

      audioElement.pause()
      button.children[0].innerText = 'music_off'
      setMusicPlays(false)
  
    }else{
      audioElement.play()
      button.children[0].innerText = 'music_note'
      setMusicPlays(true)
    }
  }
  
  let location = useLocation()['pathname']

  return (
    <div className="App">

      <StarBackground />
             
      <header>

        { location !== '/'  &&
            <Link to='/' >
                <HeaderButton icon="arrow_back" />
            </Link>
        }
        
        <HeaderButton icon="music_off" className="playMusic" callback={toggleMenuMusic} />

        { location === '/game'  &&
          <HeaderButton icon="pause" />
        } 

      </header>

      <Switch>
        <Route exact path="/" children={<Home />} />
        <Route path="/game" children={<Game />} />
        <Route path="/options" children={<Options />} />
        <Route path="/credits" children={<Credits />} />
        <Route path="/guide" children={<Guide />} />
      </Switch>

      <footer>
          <a href='https://github.com/KevvKo/jump-and-run-js'>@KevvKo</a>
        </footer>
    </div>
  );
}

export default App;
