import React, { Component } from 'react';

import './Login.css';
import { isNumberTypeAnnotation } from '@babel/types';

class Login extends Component {
    render() {
        return(
            <div className="loginDiv">
                <h2>Login</h2>
                <form>
                    <div className="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" className="form-control" id="email" placeholder="Eg. yourname@example.com" />
                    </div>
                    <div className="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" className="form-control" id="pwd" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <p className="mt-3">Don't have an account? <span className="text-primary" onClick={this.props.register}>Register Now</span></p>
            </div>
        );
    }
}

export default Login;