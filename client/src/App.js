import React , { Component } from "react";
import GoogleLogin from "react-google-login";
// import GoogleLogin from "react-google-login";
import Login from './components/login';



export class App extends Component {

    // responseGoogle = (response) => {
    //   console.log(response.accessToken);
    // // console.log(response);
    // console.log(response.profileObj);

    // }
  render() {
    return (
      <div className="App">
        <Login/>
        
      </div>
    )
  }
}



export default App;



