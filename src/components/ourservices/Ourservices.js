import React from 'react'
import images from '../../images/image1.jpg'
import './Ourservices.css'


function Ourservices() {
  return (
    <div className="Our-services">
     <h1 className="heading">Ourservices</h1>
     <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <img src={images} height='500px' width="1500px" class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
    </div>
  );
}

export default Ourservices;
