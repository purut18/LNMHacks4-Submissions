import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/auth';

import './Login.css';

class Login extends Component {

    state = {
        email: '',
        pass: ''
    }

    handlePassChange = event => {
        this.setState({
            pass: event.target.value
        })
    }

    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault();
        this.props.onAuth(this.state.email, this.state.pass);
    }

    render() {
        return(
            <div className="loginDiv">
                <h2>Login</h2>
                <form>
                    <div className="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" className="form-control" name="email" placeholder="Eg. yourname@example.com" value={this.state.email} onChange={this.handleEmailChange} />
                    </div>
                    <div className="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" className="form-control" name="password" placeholder="Password"  value={this.state.pass} onChange={this.handlePassChange} />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.submitHandler}>Submit</button>
                </form>
                <p className="mt-3">Don't have an account? <span className="text-primary" onClick={this.props.register}>Register Now</span></p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        error: state.error
    };
};


const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);