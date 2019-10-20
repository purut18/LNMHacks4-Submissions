import React, { Component } from 'react';

import './Match.css';
import OneBox from './OneBox/OneBox';

class Match extends Component {

    state = {
        profiles: [
            {
                name: "Encury",
                headline: "We're a startup based in udaipur, ja gande're a startup based in udaipur, ja gande're a startup based in udaipur, ja gande're a startup based in udaipur, ja gande're a startup based in udaipur, ja gande're a starasdjsdhgajsdgasjagsh",
                bio: "We are XYZ",
                website: "www.encury.com",
                fundReq: "1,000,000",
                fundTime: "11 months",
                dilution: "25%",
                location: "Jaipur",
                stage: "POC",
                users: "15,046",
                prevFund: false,
                firmType: "LLP"
            },
            {
                name: "Encury",
                headline: "ajda",
                bio: "We are XYZ",
                website: "www.encury.com",
                fundReq: "1,000,000",
                fundTime: "11 months",
                dilution: "25%",
                location: "Jaipur",
                stage: "POC",
                users: "15,046",
                prevFund: false,
                firmType: "LLP"
            }
        ]
    }


    render() {
        return(
            <div className="match col-9">
                <header>
                    <p>My Profile</p>
                </header>
                <main>
                    <OneBox data={this.state.profiles[0]} id="1" />
                    <OneBox data={this.state.profiles[1]} id="2" />
                </main>
            </div>
        );
    }
}

export default Match;