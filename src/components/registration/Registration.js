import React from 'react'
import './Registration.css';


function Registration() {
  return (
    <div className="App">
        <h1 className="heading">Registration</h1>
        <form>
  <div class="form-group">
  <div class="col">
  <label for="exampleInputEmail1">Name </label>
      <input type="text" class="form-control" placeholder="Enter Your name"/>
    </div>
    <div class="col">
    <label for="exampleInputEmail1">Contact </label>
      <input type="text" class="form-control" placeholder="Enter your Number"/>
    </div>
    <div class="col">
    <label for="exampleInputEmail1">Location </label>
      <input type="text" class="form-control" placeholder="Enter your location"/>
    </div>
    <div class="col">
    <label for="exampleInputEmail1">Course </label>
      <input type="text" class="form-control" placeholder="Which courde do you prefer"/>
    </div>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  );
}

export default Registration;
