import React, { Component } from 'react';
import EventCard from "./EventCard";
import axios from 'axios';


class PopularEvents extends Component {
    constructor(props) {
        super(props);

        this.state = {
            event: []
        };


        // this.getEventDetails = this.getEventDetails.bind(this);

    }
    //handles input values of form


    componentDidMount() {
        axios.get("/auth/api/events")
            .then(res => {
                this.setState({ event: res.data });
            })
    }

    updateEventList() {
        axios.get("/auth/api/events")
            .then(res => {
                this.setState({ event: res.data });
            })
    };

    render() {


        return (


            <div className="col-lg-10 " id="list_sidebar ">
                <div className="isotope-wrapper ">

                    <h2>Popular Events</h2>
                    <p>something catchy here is we want to add it</p>
                    {this.state.event.map((event) => {
                        return <EventCard event={event} key={event.id}
                        />
                    })

                    }


                    {/* <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard /> */}

                </div>
            </div>








        );
    }
}

export default PopularEvents;