import React, { Component } from 'react';
import '../../styles.scss';

import Navbar from "../nav/Navbar";
import 'bootstrap-4-grid';
import EventDetailsSingle from "../event/SingleEventDisplay/EventDetailsSingle";
import FormEventSingle from "../event/SingleEventDisplay/EventForumSingle";
import PopularEvents from "../event/PopularEvents";
import EventDropDown from "../event/EventDropDown";
import JoinEvent from '../event/SingleEventDisplay/JoinEvent';
import SingleEventHero from "../event/SingleEventDisplay/SingleEventHero";

class Event extends Component {




    render() {








        return (
            <div className="app-container bg_color_1">

                <div className="row">
                    <div className="col-md-12">
                            <Navbar />
                            <SingleEventHero />
                            <EventDropDown />

                            
                    </div>
                </div>
                <nav className="secondary_nav sticky_horizontal">
                <div className="container">
                    <ul className="clearfix">
                        <li><a href="#description" className="active">Description</a></li>
                        <li><a href="#reviews">Reviews</a></li>
                        <li><a href="#discussion">Discussion Board</a></li>
                        <li><a href="#discussion">Discussion Board</a></li>
                    </ul>
                </div>
            </nav>
               <div className="container">
                <div className="row">

                    <div className="col-lg-9 ">

                        <div className="row">
                            <EventDetailsSingle />
                        </div>
                        <div className="row">
                            <section id="discussion">
                            <FormEventSingle />
                            </section>
                        </div>
                        <div className="row">
                            <PopularEvents />
                        </div>
                    </div>
                    <aside className="col-lg-3" id="sidebar">

                        <JoinEvent />
                    </aside>
                </div>
</div>

            </div >
        );
    }
}

export default Event;
