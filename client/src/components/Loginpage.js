import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LoginForm from './LoginForm';

const Loginpage = () => {
    return (
        <Router>
            <Fragment>
                <Switch>
                    <Route path='/' exact component={LoginForm} />
                    <Route path='/home' component={HomePage} />
                </Switch>
            </Fragment>
        </Router>
    )
}

export default Loginpage
