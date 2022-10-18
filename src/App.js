import React, { useState } from 'react';
import ImagePreloader from './components/imagePreloader';
import AppHeader from './components/header';
import AppMain from './components/main';
import AppFooter from './components/footer'; 
import GameContext from './providers/GameProvider';
import Game from './scripts/services/game';
import './App.css';

function App() {
  
  const [ game, setGame ] = useState(new Game());
  
  return (
    <GameContext.Provider value={{game, setGame}}>
      <div className="App">
        <ImagePreloader />
        <AppHeader />
        <AppMain />
        <AppFooter />
      </div>
    </GameContext.Provider>
  );
}

export default App;
