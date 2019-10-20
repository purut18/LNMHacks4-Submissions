import React, { Component } from 'react';

import './Match.css';
import OneBox from './OneBox/OneBox';

class Match extends Component {

    state = {
        profiles: [
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
            },
            {
                name: "Encury",
                headline: "A tinder based app for funding. Investors and Startups can find each other easily through this UI.",
                bio: "We are passionate about building products for the future and this product will solve problems people rarely acknoledge.",
                website: "www.encury.com",
                fundReq: "1,000,000",
                fundTime: "2 Year(s)",
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
                    {this.state.profiles.map((value, key) => {
                        return (
                            <OneBox data={this.state.profiles[key]} key={key} />
                        );
                    })}
                </main>
            </div>
        );
    }
}

export default Match;