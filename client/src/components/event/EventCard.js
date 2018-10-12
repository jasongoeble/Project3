import React, { Component } from 'react';
import { isAbsolute } from 'path';

class EventCard extends Component {


    constructor(props) {
        super(props);

        this.state = {

        };

        this.storeTitle = this.storeTitle.bind(this);

        // this.getEventDetails = this.getEventDetails.bind(this);

    }



    storeTitle() {
        localStorage.setItem('event_id', this.props.event.id);

    }



    render() {


        return (
            <div class="box_list isotope-item latest ">

                <div className="row no-gutters ">
                    <div className="col-lg-5 ">
                        <figure>
                            <small>Event Type</small>
                            <a href="#0"><img src={this.props.event.skill5} className="img-fluid" alt="ss" width={800} height={533} /><div className="read_more"><span>Read more</span></div></a>
                        </figure>
                        </div>
                        <div className="col-lg-7 ">
                            <div className="wrapper ">

                                <h3 ><a onClick={this.storeTitle} href="/event">{this.props.event.event_title}</a></h3>

                                <p>{this.props.event.summary}</p>
                                <span className="event_date"><strong></strong> </span>
                            </div>
                            <ul>
                                <li><small>{this.props.event.time}</small>
                                </li><li><i className="icon_clock_alt" /> 1h 30min</li>
                                <li><div className="event_attaendes"><span>Event<em>Attendees</em></span><strong>7</strong></div></li>
                            </ul>
                        </div>
                    
                </div>
            </div>









        );
    }
}

export default EventCard;