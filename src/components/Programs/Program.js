import React from 'react'
import './Program.css';
//import {BrowserRouter} from 'react-router-dom'
import images from '../images/image2.jpg'


function Program() {
  return (
    <div className="App">
        <h1>Register</h1>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <img src={images} height='400px' width="1500px" class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
    </div>
  );
}

export default Program;
