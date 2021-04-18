import React from 'react';
import ImagePreloader from './assets/components/imagePreloader'
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
      <ImagePreloader />
      <AppHeader />
      <AppMain />
      <AppFooter />
    </div>
  );
}

export default App;
