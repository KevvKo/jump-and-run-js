import React from 'react';
import AppHeader from './assets/components/header'
import AppMain from './assets/components/main'
import AppFooter from './assets/components/footer' 
import './App.css';


/* TO DO'S: 
  
  implement ressource loading and availability
  refactor store

*/

function App() {

  return (
    <div className="App">
      <AppHeader />
      <AppMain />
      {/* <AppFooter artist={artist} title={title} audio={audioElement}/> */}
    </div>
  );
}

export default App;
