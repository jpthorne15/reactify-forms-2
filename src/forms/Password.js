import React, { Component } from "react";

class Password extends Component {
     
     render () {
          console.log("state",this.state)
          console.log("props",this.props)
          return (
          <form> Forgot Password?
               <br />
               <input type="text" name="Pwd Forgot" />
               <br />
               <input type="submit" value="Submit" />
               </form>
             );
     }
   }
   export default Password;