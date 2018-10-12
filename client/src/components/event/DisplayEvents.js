import React, { Component } from 'react';
import EventCard from "./EventCard";
import axios from 'axios';
import EventDropDown from "./EventDropDown";
import PopularEvents from './PopularEvents';


class DisplayEvents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      event: []
    };

      this.updateEventList = this.updateEventList.bind(this);

    // this.getEventDetails = this.getEventDetails.bind(this);

  }
  //handles input values of form


  componentDidMount() {
    axios.get("api/events")
      .then(res => {
        console.log(res.data);
        this.setState({ event: res.data });
      })
  }

  updateEventList() {
    axios.get("api/events")
      .then(res => {
        console.log(res.data);
        this.setState({ event: res.data });
      })
  };


  render() {


    return (
      <div className="">
        <div className="container">
          <div className="row">

          <EventDropDown updateEventList={this.updateEventList.bind(this)}/>



          </div>
            <div className="row">
            <PopularEvents />

            </div>

        </div>


      </div>


    );
  }
}

export default DisplayEvents;