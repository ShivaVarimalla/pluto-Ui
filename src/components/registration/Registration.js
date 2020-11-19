import React from 'react'
import './Registration.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


function Registration() {

  const CourseOptions = [
    'Machine Learning',
    'PCB Design'
  ];

  const LocationOptions = [
    'Hyderabad',
    'Mumbai',
    'Pune'
  ];

  return (
    <div className="Registration">
      <div className='container-reg'>
        <h1 className="heading-registration">REGISTRATION</h1>
        <form className='form'>
          <div className="input-field">
            <label for="InputName">Name </label><br/>
            <input className='input-box' type="text" name='InputName' placeholder="Enter Your name"/>
          </div>
          <div className="input-field">
            <label for="InputContact">Contact </label><br/>
            <input className='input-box' name='InputContact' type="text" placeholder="Enter your Number"/>
          </div>
          <div className="input-field">
            <label for="InputLocation">Location </label>
            <Dropdown className='input-box' options={LocationOptions} value={LocationOptions[0]} placeholder="Select your location" />
          </div>
          <div className="input-field">
            <label for="InputCourse">Course </label>
            <Dropdown className='input-box' options={CourseOptions} value={CourseOptions[0]} placeholder="Select an course" />
          </div>
          <button type="submit" className="start-button center-button">Submit</button>
      </form>
      </div>
    </div>
  );
}

export default Registration;
