import React, { Component } from 'react';
//import logo from '../../logo.svg';
import '../../styles.scss';

//import '../../js/common_scripts';
//import '../../js/main.js';
import axios from "axios";
//import LoginForm from "../login/LoginForm";

// import SignUpForm from "../login/SignUpForm";
// import LoginForm from "../login/LoginForm";
import LogoutFunction from '../login/LogoutFunction.jsx';

import Auth from '../modules/Auth';
import PropTypes from 'prop-types';


//import DisplayEvents from "../event/DisplayEvents";
import Navbar from "../nav/Navbar";
import 'bootstrap-4-grid';

import HeroSearch from "../features/HeroSearch";
//import AboutSection from "../features/AboutSection";
import PopularEvents from "../event/PopularEvents";
import EventDropDown from '../event/EventDropDown';
//import SignUpForm from "../login/SignUpForm";







class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false,
            event: []
        }
    };

    componentDidMount() {
        // check if user is logged in on refresh
        this.toggleAuthenticateStatus()
        // Auth.deauthenticateUser();

        axios.get("/auth/api/events")
            .then(res => {
                console.log(res.data);
                this.setState({ event: res.data });
            })


    }
    toggleAuthenticateStatus() {
        // check authenticated status and toggle state based on that
        this.setState({ authenticated: Auth.isUserAuthenticated() })
    }



    render() {
        return (

            <div className="home">

                <Navbar toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
                <HeroSearch />
                <EventDropDown />
                <br />
                <div className="row">
                <div className="col-lg-1">
                </div>
                    <div className="col-lg-3">
                        <aside className="col-lg-8" id="sidebar">
                            <div id="filters_col">
                                <a data-toggle="collapse" href="#collapseFilters" aria-expanded="false" aria-controls="collapseFilters" id="filters_col_bt">Filters </a>
                                <div className="collapse show" id="collapseFilters">
                                <div className="filter_type">
                                <h6>Event Type</h6>
                                <ul>
                                    <li>
                                        <label>
                                            <input type="checkbox" className="icheck" checked/>All
                                            <small>(945)</small>
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input type="checkbox" className="icheck"/>Hackathon
                                            <small>(45)</small>
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input type="checkbox" className="icheck"/>Code Meetup
                                            <small>(30)</small>
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input type="checkbox" className="icheck"/>Industry Events
                                            <small>(25)</small>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <div className="filter_type">
									<h6></h6>
									<input type="text" id="range" name="range" value=""/>
                                </div>
                                <div className="filter_type">
                                <h6>Populariy </h6>
                                <ul>
                                    <li>
                                        <label>
                                            <input type="checkbox" className="icheck"/>
                                            <span className="cat_star">
                                                <i className="icon_star"></i>
                                                <i className="icon_star"></i>
                                                <i className="icon_star"></i>
                                                <i className="icon_star"></i>
                                                <i className="icon_star"></i>
                                            </span>
                                            <small>(25)</small>
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input type="checkbox" className="icheck"/>
                                            <span className="cat_star">
                                                <i className="icon_star"></i>
                                                <i className="icon_star"></i>
                                                <i className="icon_star"></i>
                                                <i className="icon_star"></i>
                                            </span>
                                            <small>(26)</small>
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input type="checkbox" className="icheck"/>
                                            <span className="cat_star">
                                                <i className="icon_star"></i>
                                                <i className="icon_star"></i>
                                                <i className="icon_star"></i>
                                            </span>
                                            <small>(25)</small>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <div className="filter_type">
                            <h6>Rating</h6>
                            <ul>
                                <li>
                                    <label>
                                        <input type="checkbox" className="icheck"/>Superb 9+
                                        <small>(25)</small>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" className="icheck"/>Very Good 8+
                                        <small>(26)</small>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" className="icheck"/>Good 7+
                                        <small>(25)</small>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" className="icheck"/>Pleasant 6+
                                        <small>(12)</small>
                                    </label>
                                </li>
                            </ul>
                        </div>

                                </div>
                            </div>
                        </aside>
                    </div>
                    <div className="col-lg-8">
                        <PopularEvents event={this.state.event} />
                    </div>

                </div>


            </div>








        );
    }
}

LogoutFunction.contextTypes = {
    router: PropTypes.object.isRequired
};


export default Home;



