import React, { Component } from 'react';

import './Match.css';

class Match extends Component {
    render() {
        return(
            <div className="match col-9">
                <header>
                    <p>My Profile</p>
                </header>
                <main>
                    <div className="match-ui">
                         <div className="info">
                            <div className="short-info">
                                "Tinder Like App For Funding. Investors and Startups can match using easy swiping UI."
                            </div>
                            <div className="row justify-content-between">
                                <div className="name col-8">
                                    <span className="name-span">Encury</span>
                                    <span>Puru Thakkar & Tejas Sharma</span>
                                </div>
                                <div className="read-more col-3">
                                    <img src={'https://cdn0.iconfinder.com/data/icons/flat-round-arrow-arrow-head/512/Red_Arrow_Head_Down-2-512.png'} width="60" height="60" />
                                </div>
                            </div>
                         </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default Match;