import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';
import GoogleButton from 'react-google-button';
import api from '../api';

class LoginGoogle extends Component {

    responseSuccessGoogle = async response => {
        console.log(response);
        try {
            await api.googleLogin(response);
        } catch(err) {
            console.log(err);
        }
    };

    responseFailureGoogle = response => {
        console.log(response)
    };

    render() {
        return (
            <div className='loginGoogle-div'>
                <GoogleLogin
                    clientId="1044015139792-jjl22brbh17oo2a7jkgg720tcqqc6cgf.apps.googleusercontent.com"
                    render={renderProps => (
                        <GoogleButton className='signInButton' onClick={renderProps.onClick} disabled={renderProps.disabled}> </GoogleButton>
                    )}
                    buttonText="Login"
                    onSuccess={this.responseSuccessGoogle}
                    onFailure={this.responseFailureGoogle}
                    cookiePolicy={'single_host_origin'}
                    className='loginGoogle'
                />
            </div>
        )
    }
}

export default LoginGoogle