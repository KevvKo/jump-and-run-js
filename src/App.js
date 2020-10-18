import React from 'react';
import './App.css';
import Home from './routes/home'
import Game from './routes/game'
import Credits from './routes/credits'
import {
  useLocation,
  Switch,
  Route
} from "react-router-dom";

import backArrow from './assets/img/arrow_back-24px.svg'
import pause from './assets/img/pause-24px.svg'


function HeaderButton(props){

  let icon = props.icon
  let span

  if(icon === 'arrow') span = <span className="material-icons">arrow_back</span>
  else  span = <span className='material-icons'>pause</span> 

  return (
    <div className='headerbutton'>
      {span}
    </div>
  )
}

function App() {

  let location = useLocation()['pathname']

  return (
    <div className="App">
      <header>
        { location !== '/'  && <HeaderButton  icon='arrow' />}
        { location === 'game' && <HeaderButton icon='pause' /> }
      </header>

      <Switch>
        <Route exact path="/" children={<Home />} />
        <Route path="/game" children={<Game />} />
        <Route path="/credits" children={<Credits />} />
      </Switch>

      <footer>
          <a href='https://github.com/KevvKo/jump-and-run-js'>@KevvKo</a>
        </footer>
    </div>
  );
}

export default App;
