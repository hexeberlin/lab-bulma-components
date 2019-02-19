import React, { Component } from 'react';
import Navbar from "./Navbar"
import FormField from "./FormField"
import CoolButton from "./CoolButton"

class Signup extends Component {
    render() {
        return (
          <div className="signup">
            <Navbar />
            <div className="section">
              <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
              <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
              <FormField label="Password" type="password" />
              <CoolButton isSmall isSuccess>Submit</CoolButton>     
            </div>
          </div>
        )
    }
}

export default Signup;