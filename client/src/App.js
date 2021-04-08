// import React , { Component } from "react";
// import GoogleLogin from "react-google-login";
// // import axios from "axios";

// // function App() {
// //   const responseSuccessGoogle = (response) => {
// //     console.log(response);
    
// //   };
// //   const responseErrorGoogle = (response) => {
// //     console.log(response);
// //   };
// //   return (
// //     <div className="App">
// //       <h1>login with google</h1>
// //       <GoogleLogin
// //         clientId="1044015139792-jjl22brbh17oo2a7jkgg720tcqqc6cgf.apps.googleusercontent.com"
// //         buttonText="Login with Google"
// //         onSuccess={responseSuccessGoogle}
// //         onFailure={responseErrorGoogle}
// //         cookiePolicy={"single_host_origin"}
// //       />
      
// //     </div>
// //   );
// // }

// export class App extends Component {

//     responseGoogle = (response) => {
//     console.log(response.accessToken);
//     console.log(response.profileObj);

//     }
//   render() {
//     return (
//       <div>
//         <GoogleLogin
//         clientId="804388781121-t8uomr60jtgb206v4cvopuc4aum746ft.apps.googleusercontent.com"
//         buttonText="Login"
//         onSuccess={this.responseGoogle}
//         onFailure={this.responseGoogle}
//         cookiePolicy={'single_host_origin'}

//         />
//       </div>
//     )
//   }
// }



// export default App;


import './App.css';
import React, { Component } from 'react';
import Bookreact from './components1/Bookreact';
import CreateForm from './components1/CreateForm';
import Routes from "./routes/Routes";
import {BrowserRouter as Router,Switch,} from "react-router-dom";


const axios = require('axios');

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      bookreacts: [],
    };
  }

  fetchdata = async () => {
    try {
      const response = await axios.get('./bookreacts');
      // console.log(response.data);
      this.setState({
        bookreacts: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
//to update state of component
  componentDidMount = () => {
    this.fetchdata();
  };

  render() {
    return (
      <>

      <CreateForm fetchdata={this.fetchdata} />
      {this.state.bookreacts.map((bookreact, index) => {
          return <Bookreact bookreact={bookreact} key={bookreact._id} fetchdata={this.fetchdata}  />;
      })}
      </>
      );
  }
}

export default App;