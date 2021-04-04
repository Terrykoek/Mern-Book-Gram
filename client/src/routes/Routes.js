import React from "react";
import { Switch, Route,Link } from "react-router-dom";
import Login from '../components1/login';
import SignUp from '../components1/signup';



function Routes() {
    return(
        <switch>
            <Route path="/Login" component={Login} />
            <Route path="/signup" component={SignUp} />


        </switch>
    )
}


export default Routes;