import React, { Component } from 'react';
import axios from 'axios';
class CreateEventForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      event: {

        event_title: "",
        summary: "",
        max_attend: "",
        age_min: "",
        date: "",
        time: "",
        addr1: "",
        city: "",
        state: "",
        location_name: "",



      },
      creator_user_id: localStorage.getItem("token")

    };




    this.handleEventChange = this.handleEventChange.bind(this);
    this.handleEventSubmit = this.handleEventSubmit.bind(this);
    this.onClick = this.onClick.bind(this);


  }
  //handles input values of form
  handleEventChange = event => {
    this.setState({
      [event.target.name]: event.target.value

    });
  }

  //Form submit and axios post to DB
  handleEventSubmit = event => {
    event.preventDefault();








    let eventInfo = {
      creator_user_id: this.state.creator_user_id,
      event_title: this.state.event_title,
      summary: this.state.summary,
      max_attend: this.state.max_attend,
      age_min: this.state.age_min,
      date: this.state.date,
      time: this.state.time,
      addr1: this.state.addr1,
      city: this.state.city,
      state: this.state.state,
      location_name: this.state.location_name,

    };
    console.log(eventInfo);
    axios({
      method: 'post',
      url: '/auth/api/events',
      data: eventInfo,
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);

      });
    this.props.toggleList();
    this.onClick();
  };


  onClick() {
    // const { updateEventList } = this.props

    // updateEventList();
  }


  render() {




    return (
      <div className="app-form-container">


        <form onSubmit={this.handleEventSubmit} >
          <h1>Create an Event</h1>
          <label>Title: </label>
          <input className="InputField" type="text" name="event_title" value={this.state.event_title} onChange={this.handleEventChange} placeholder="hello"></input>

          <label>Summary: </label>
          <input className="InputField" type="text" name="summary" value={this.state.summary} onChange={this.handleEventChange}></input>

          <label>Max Attendance: </label>
          <input className="InputField" type="text" name="max_attend" value={this.state.max_attend} onChange={this.handleEventChange}></input>


          <label>Age Min.: </label>
          <input className="InputField" type="text" name="age_min" value={this.state.age_min} onChange={this.handleEventChange}></input>


          <label>Date: </label>
          <input className="InputField" type="text" name="date" value={this.state.date} onChange={this.handleEventChange}></input>


          <label>Time: </label>
          <input className="InputField" type="text" name="time" value={this.state.time} onChange={this.handleEventChange}></input>


          <label>Address: </label>
          <input className="InputField" type="text" name="addr1" value={this.state.addr1} onChange={this.handleEventChange}></input>

          <label>City: </label>
          <input className="InputField" type="text" name="city" value={this.state.city} onChange={this.handleEventChange}></input>

          <label>State: </label>
          <input className="InputField" type="text" name="state" value={this.state.state} onChange={this.handleEventChange}></input>

          <label>Location Name: </label>
          <input className="InputField" type="text" name="location_name" value={this.state.location_name} onChange={this.handleEventChange}></input>



          <button type="submit" >Submit</button>
        </form>
      </div>


    );
  }
}

export default CreateEventForm;