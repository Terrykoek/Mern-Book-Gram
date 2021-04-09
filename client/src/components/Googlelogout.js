import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId =
  "697400510228-eacr051p1dkqcdp5j8clv60bi365kih3.apps.googleusercontent.com";

function Googlelogout() {
  const onSuccess = () => {
    console.log("Logout successfully");
    alert("Logout successfully ✌");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Google Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Googlelogout;
