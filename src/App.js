import React from 'react'
import './App.css';
import Aboutus from './components/aboutus/Aboutus';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar.js'
import Ourservices from './components/ourservices/Ourservices';
import Program from './components/Programs/Program';
import Registration from './components/registration/Registration';

function App() {
  return (
    <div className="App">
      <div className='Banner'> 
          <Navbar/>
          <div className='container-heading'>
            <div className='Banner-heading'>
              <h1 className='heading'>WE ENSURE BETTER EDUCATION FOR A BETTER WORLD</h1>
              <p className='sub-heading'>In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telescope known as the Hubble.</p>
              <button className='start-button'>Get Started</button>
            </div>
          </div>
      </div>
      <Registration/>
      <Footer/>
    </div>
  );
}

export default App;
