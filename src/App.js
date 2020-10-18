import React from 'react';
import './App.css';
import Home from './routes/home'
import Game from './routes/game'
import Options from './routes/options'
import Credits from './routes/credits'
import Background from './assets/components/background'

import {
  useLocation,
  Switch,
  Link,
  Route
} from "react-router-dom";

function App() {

  let location = useLocation()['pathname']

  return (
    <div className="App">

      <Background />

      <header>

        { location !== '/'  &&
          <div className='headerbutton'>
            <Link to='/'>
              <span className="material-icons">arrow_back</span>
            </Link>
          </div>
        }

        { location === '/game'  &&
          <div className='headerbutton'>
              <span className="material-icons">pause</span>
          </div>
        } 

      </header>

      <Switch>
        <Route exact path="/" children={<Home />} />
        <Route path="/game" children={<Game />} />
        <Route path="/options" children={<Options />} />
        <Route path="/credits" children={<Credits />} />
      </Switch>

      <footer>
          <a href='https://github.com/KevvKo/jump-and-run-js'>@KevvKo</a>
        </footer>
    </div>
  );
}

export default App;
