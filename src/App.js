import React, { useState } from 'react';
import './App.css';
import Home from './routes/home'
import Game from './routes/game'
import Options from './routes/options'
import Credits from './routes/credits'
import Guide from './routes/guide'
import StarBackground from './assets/components/starBackground'

import {
  useLocation,
  Switch,
  Link,
  Route
} from "react-router-dom";


function App() {

  const [musicPlays, setMusicPlays] = useState(false)

  const toggleMusic = () => {

    let button = document.querySelector('.playMusic')
    let audioElement = document.querySelector('audio')

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
      <audio src={require('./assets/sound/menu/sappheiros-embrace.mp3')}></audio>
      <StarBackground />
             
      <header>

        { location !== '/'  &&
    
            <Link to='/' className='headerbutton'>
              <span className="material-icons">arrow_back</span>
            </Link>
        }
        
        <div className='headerbutton playMusic' onClick={() => toggleMusic()}>
            <span className="material-icons">music_off</span>
        </div>

        { location === '/game'  &&
          <div className='headerbutton pauseGame'>
              <span className="material-icons">pause</span>
          </div>
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
