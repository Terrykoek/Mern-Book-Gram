import React from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";

function App() {
  const responseSuccessGoogle = (response) => {
    console.log(response);
    /* axios({
      method: "POST",
      url: "https://localhost:8000/api/googlelogin",
      data: { tokenId: response.tokenId },
    }).then((response) => {
      console.log("this: " + response);
    }); */
  };
  const responseErrorGoogle = (response) => {
    console.log(response);
  };
  return (
    <div className="App">
      <h1>login with google</h1>
      <GoogleLogin
        clientId="1044015139792-jjl22brbh17oo2a7jkgg720tcqqc6cgf.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseSuccessGoogle}
        onFailure={responseErrorGoogle}
        cookiePolicy={"single_host_origin"}
      />
      ,
    </div>
  );
}

export default App;
