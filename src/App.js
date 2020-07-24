import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
       <form action="/action_page.php">
    <div className="form-group">
      <h1>My Name is James Bond</h1>
      <label for="email">Email:</label>
      <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
    </div>
    <div className="form-group">
      <label for="pwd">Password:</label>
      <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd"/>
    </div>
    <div className="checkbox">
      <label><input type="checkbox" name="remember"/> Remember me</label>
    </div>
    <button type="submit" className="btn btn-default">Submit</button>
  </form>
    </div>
  );
}

export default App;
