import React from "react";
import {Link} from "react-router-dom"

const Navbar = () => (
  
    <div>
      <ul>
        <li>
          <Link to="/Register">Register</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <Link to="/Password">Password</Link>
      </ul>
      <hr />
      
    </div>
 
);

export default Navbar;
