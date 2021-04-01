import React , { Component } from "react";
import GoogleLogin from "react-google-login";
// import axios from "axios";

// function App() {
//   const responseSuccessGoogle = (response) => {
//     console.log(response);
    
//   };
//   const responseErrorGoogle = (response) => {
//     console.log(response);
//   };
//   return (
//     <div className="App">
//       <h1>login with google</h1>
//       <GoogleLogin
//         clientId="1044015139792-jjl22brbh17oo2a7jkgg720tcqqc6cgf.apps.googleusercontent.com"
//         buttonText="Login with Google"
//         onSuccess={responseSuccessGoogle}
//         onFailure={responseErrorGoogle}
//         cookiePolicy={"single_host_origin"}
//       />
      
//     </div>
//   );
// }

export class App extends Component {

    responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);

    }
  render() {
    return (
      <div>
        <GoogleLogin
        clientId="697400510228-eacr051p1dkqcdp5j8clv60bi365kih3.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={'single_host_origin'}

        />
      </div>
    )
  }
}



export default App;
