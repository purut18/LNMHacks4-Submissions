import React, { Component } from 'react';

import './Dashboard.css';

import Sidebar from '../../components/SideBar/Sidebar';
import Match from '../../components/Match/Match';

class Dashboard extends Component {
    render() {
        return(
            <main class="container-fluid">
                <div class="row">
                    <Sidebar />
                    <Match />
                </div>
            </main>
        );
    }
}

export default Dashboard;