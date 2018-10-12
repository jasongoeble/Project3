import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../styles.scss';
import { DropdownButton } from 'react-bootstrap';
import {MenuItem} from "react-bootstrap";


import Navbar from "../nav/Navbar";
import 'bootstrap-4-grid';


class Home extends Component {
    
    render() {
        return (
            <div className="app-container">

                <div className="row">
                    <div className="col-md-8">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <Navbar />
                        </header>
                    </div>
                </div>
                <div className="row">

                <DropdownButton
                bsStyle={"asdf".toLowerCase()}
                title={"asdf"}
               
              >
                <MenuItem eventKey="1">Action</MenuItem>
                <MenuItem eventKey="2">Another action</MenuItem>
                <MenuItem eventKey="3" active>
                  Active Item
                </MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="4">Separated link</MenuItem>
              </DropdownButton>

                </div>
            </div>
        );
    }
}

export default Home;
