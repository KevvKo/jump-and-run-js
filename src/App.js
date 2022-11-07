import React from 'react';
import ImagePreloader from './components/imagePreloader';
import Header from './components/header';
import AppMain from './components/main';
import AppFooter from './components/footer'; 
import GameContext from './providers/GameProvider';
import Game from './scripts/game';
import './App.css';

function App() {
    
  return (
    <GameContext.Provider value={new Game()}>
      <div className="App">
        <ImagePreloader />
        <Header />
        <AppMain />
        <AppFooter />
      </div>
    </GameContext.Provider>
  );
}

export default App;
