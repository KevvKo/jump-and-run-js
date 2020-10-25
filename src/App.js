import React, { useState } from 'react';
import './App.css';
import Home from './routes/home'
import Game from './routes/game'
import Options from './routes/options'
import Credits from './routes/credits'
import Guide from './routes/guide'

import menuTrack1 from "./assets/sound/menu/sappheiros-embrace.mp3"

import StarBackground from './assets/components/starBackground'
import HeaderButton from './assets/components/headerButton'

import {
  useLocation,
  Switch,
  Link,
  Route
} from "react-router-dom";


function App() {

  const [musicPlays, setMusicPlays] = useState(false)
  const [audioElement] = useState(new Audio(menuTrack1))

  const toggleMusic = () => {

    let button = document.querySelector('.playMusic')
    console.log(button)
    
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
        
        <HeaderButton icon="music_off" className="playMusic" callback={toggleMusic} />

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
