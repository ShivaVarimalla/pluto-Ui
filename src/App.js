import React from 'react'
import './App.css';
import Aboutus from './components/aboutus/Aboutus';
import Infobar from './components/infobar/Infobar';
import Navbar from './components/navbar/Navbar.js'
import Ourservices from './components/ourservices/Ourservices';
import Program from './components/Programs/Program';
import Registration from './components/registration/Registration';

function App() {
  return (
    <div className="App">
      <Infobar/>
     <Navbar/>
     <Registration/>
     <Aboutus/>
     <Ourservices/>
     <Program/>
    </div>
  );
}

export default App;
