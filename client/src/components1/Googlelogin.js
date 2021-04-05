import React from 'react';
import { GoogleLogin } from 'react-google-login';


const clientId = "697400510228-eacr051p1dkqcdp5j8clv60bi365kih3.apps.googleusercontent.com" ;

export const refreshTokenSetup = (res) => {
  // Timing to renew access token
  let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse();
    refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
    console.log('newAuthRes:', newAuthRes);
    // saveUserToken(newAuthRes.access_token);  <-- save new token
    localStorage.setItem('authToken', newAuthRes.id_token);

    // Setup the other timer after the first one
    setTimeout(refreshToken, refreshTiming);
  };

  // Setup first refresh timer
  setTimeout(refreshToken, refreshTiming);
};

function Googlelogin() {
  const onSuccess = (res) => {
    console.log('[Login Success] currentUser', res.profileObj);
    refreshTokenSetup(res);
  };
  const onFailure = (res) => {
    console.log('[Login Failed] res:', res);
  };

  return (
    <div>
    <GoogleLogin
    clientId={clientId}
    buttonText="Login with Google"
    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy={'single_host_origin'}
    isSignedIn={true}
    />
    </div>
  )
}
     

export default Googlelogin;