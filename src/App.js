import React from 'react';
import ImagePreloader from './components/imagePreloader';
import AppHeader from './components/header';
import AppMain from './components/main';
import AppFooter from './components/footer'; 
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
