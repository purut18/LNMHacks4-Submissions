import React, { Component } from 'react';

import './Signup.css';

class Signup extends Component {
    render() {
        return(
            <div className="signupDiv">
                <h2>Signup</h2>
                <form>
                    <div className="form-group">
                        <label for="name">Company Name:</label>
                        <input type="text" className="form-control" id="name" placeholder="Eg. Finder" />
                    </div>
                    <div className="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" className="form-control" id="email" placeholder="Eg. yourname@example.com" />
                    </div>
                    <div className="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" className="form-control" id="pwd" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label for="entity">Registered Entity: </label>
                        <select className="form-control custom-select">
                            <option>Not Yet Registered</option>
                            <option>Propritership</option>
                            <option>Partnership</option>
                            <option>Pvt. Ltd.</option>
                            <option>LLP</option>
                            <option>OPC</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="regDate">Registeration Date: </label>
                        <input type="date" className="form-control" id="regDate" placeholder="Registration Date" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Signup;