import React from 'react';
import './App.css';
import Home from './routes/home'
import Game from './routes/game'
import Credits from './routes/credits'
import {
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <header></header>

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
