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

    render() {
        return(
            <div className="auth">
                <header>Finder</header>
        { this.state.login ? <Login register={this.register} /> : <Signup /> }
            </div>
        );
    }
}

export default Auth;