import React from 'react'
import './Registration.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


function Registration() {

  const CourseOptions = [
    'Machine Learning','PCB Design'
  ];

  return (
    <div className="Registration">
        <h1 className="heading-registration">Registration</h1>
        <form>
          <div className="input-field">
            <label for="InputName">Name </label>
            <input type="text" name='InputName' className="form-control" placeholder="Enter Your name"/>
          </div>
          <div className="input-field">
            <label for="InputContact">Contact </label>
            <input type="text" className="form-control" placeholder="Enter your Number"/>
          </div>
          <div className="input-field">
            <label for="InputLocation">Location </label>
            <input type="text" className="form-control" placeholder="Enter your location"/>
          </div>
          <div className="input-field">
            <label for="InputCourse">Course </label>
            <Dropdown className='drop-down' options={CourseOptions} value={CourseOptions[0]} placeholder="Select an course" />
          </div>
          <button type="submit" className="start-button">Submit</button>
      </form>
    </div>
  );
}

export default Registration;
