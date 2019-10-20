import React, { Component } from 'react';

import './Dashboard.css';

import Sidebar from '../../components/SideBar/Sidebar';
import Match from '../../components/Match/Match';

class Dashboard extends Component {
    render() {
        return(
            <main className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <Match />
                </div>
            </main>
        );
    }
}

export default Dashboard;