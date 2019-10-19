import React, { Component } from 'react';

import './Sidebar.css';

class Sidebar extends Component {
    render() {
        return(
            <div class="sidebar col-3">
                <header>
                    <h1>Finder</h1>
                </header>
                <div class="messages">
                    <h4>Messages</h4>
                    <div class="one-msg container-fluid">
                        <div class="row justify-content-start">
                            <div class="dp">
                                <img src={"https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/NafSadh_Profile.jpg/768px-NafSadh_Profile.jpg"} width="84" height="84" />
                            </div>
                            <div class="col-8 msgDetail">
                                <span class="name-span">NeelTech</span>
                                
                                <span>hmm, are you sure that will work?</span>
                            </div>
                        </div>
                    </div>
                    <div class="one-msg container-fluid">
                        <div class="row justify-content-start">
                            <div class="dp">
                                <img src={"https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/NafSadh_Profile.jpg/768px-NafSadh_Profile.jpg"} width="84" height="84" />
                            </div>
                            <div class="col-8 msgDetail">
                                <span class="name-span">Encury</span>
                                
                                <span>Puru: yes, we can do that</span>
                            </div>
                        </div>
                    </div>
                    <div class="one-msg container-fluid">
                        <div class="row justify-content-start">
                            <div class="dp">
                                <img src={"https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/NafSadh_Profile.jpg/768px-NafSadh_Profile.jpg"} width="84" height="84" />
                            </div>
                            <div class="col-8 msgDetail">
                                <span class="name-span">Let's Eat</span>
                                
                                <span>are you dumb?</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Sidebar;