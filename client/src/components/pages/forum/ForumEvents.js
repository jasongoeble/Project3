import React, { Component } from 'react';
import logo from '../../../logo.svg';
import '../../../App.css';
import DiscussionBoard from "../../forum/DiscussionBoard";

import Navbar from "../../nav/Navbar";
import 'bootstrap-4-grid';


class Home extends Component {
    render() {
        return (
            <div className="App">

                <div className="row">
                    <div className="col-md-8">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <Navbar />
                        </header>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                    <DiscussionBoard />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;