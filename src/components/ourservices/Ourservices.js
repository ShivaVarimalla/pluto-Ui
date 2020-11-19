import React from 'react'
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import './Ourservices.css'
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'


function Ourservices() {
  var items = [
    {
        name: "Machine Learning",
        description: "Probably the most random thing you have ever seen!",
        image:image1
    },
    {
        name: "PCB Design",
        description: "Hello World!",
        image:image2
    }
]
  return (
    <div className="Our-services">
     <h1 className="heading-registration" style={{marginBottom:'0px'}}>Our services</h1>
     <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
      </Carousel>
    </div>
  );
}

function Item(props)
{
    return (
        <Paper>
          <div className='our-container'>
            <div>
              <img src={props.item.image} width='100%' height='250px'/>
            </div>
            <div>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
 
            <button className="start-button">
                Register
            </button>
            </div>
          </div>
        </Paper>
    )
}

export default Ourservices;
