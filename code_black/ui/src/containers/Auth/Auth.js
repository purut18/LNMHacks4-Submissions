import React, { Component } from 'react';
import Login from './Login/Login';

import './Auth.css';
import Signup from './Signup/Signup';

class Auth extends Component {

    state = {
        login: true
    }

    register = () => {
        this.setState({
            login: false
        });
    }

    login = () => {
        this.setState({
            login: true
        });
    }

    render() {
        return(
            <div className="auth">
                <header>Finder</header>
        { this.state.login ? <Login register={this.register} /> : <Signup login={this.login} /> }
            </div>
        );
    }
}

export default Auth;