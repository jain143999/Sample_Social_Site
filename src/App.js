import React from 'react';

import './App.css';
import NavBar from './components/navbar/Navbar';
import Bottom from './components/bottom/Bottom';

function App() {
  return (
    <div className="App" style={{backgroundColor: '#E9EAED'}}>
      
      <div className='navbar-container'>
      <NavBar/>
      </div>
     <div >
      <Bottom/>
     </div>
    </div>
  );
}

export default App;

