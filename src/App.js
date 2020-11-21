import React,{useState,useEffect} from 'react'
import './App.css';
import Aboutus from './components/aboutus/Aboutus';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar.js'
import SideBar from './components/navbar/sidebar.js'
import Ourservices from './components/ourservices/Ourservices';
import Program from './components/program/Program';
import Registration from './components/registration/Registration';

function App() {
  const [displaySidebar,setSidebar] = useState(false);

  useEffect(()=>{
    if(window.screen.width<=800){
      setSidebar(true);
    }else{
      setSidebar(false);
    }
  },[])

  const checkWidth = ()=>{
    console.log(window.screen.width);
    if(window.screen.width<=800){
      setSidebar(true);
    }else{
      setSidebar(false);
    }
  }

  window.addEventListener('resize',checkWidth);
  return (
    <div className="App">
      {displaySidebar?<SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />:''}
      <div className='Banner'> 
          <Navbar displaySidebar={displaySidebar}/>
          <div className='container-heading'>
            <div className='Banner-heading'>
              <h1 className='heading'>WE ENSURE BETTER EDUCATION FOR A BETTER WORLD</h1>
              <p className='sub-heading'>In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telescope known as the Hubble.</p>
              <button className='start-button'>Get Started</button>
            </div>
          </div>
      </div>
      <Registration/>
      <Program/>
      <Ourservices/>
      <Aboutus/>
      <Footer/>
    </div>
  );
}

export default App;
