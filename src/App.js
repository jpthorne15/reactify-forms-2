import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Register from "./forms/register";
import Login from "./forms/login";
import Password from "./forms/Password";
import Navbar from "./forms/Navbar";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route path="/Register" component={Register} /> 
      <Route path="/Login" component={Login} /> 
      <Route path="/Password" component={Password} />
        </div>
      </Router>
    );
  }
}

export default App;
