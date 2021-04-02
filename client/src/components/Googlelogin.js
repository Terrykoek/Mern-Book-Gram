import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';

class Googlelogin extends Component{

        responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj);
      };

      render() {
        return (
          <div>
            <GoogleLogin
            clientId="697400510228-eacr051p1dkqcdp5j8clv60bi365kih3.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
    
            />
          </div>
        )
      }
    }
    
    
    

export default Googlelogin