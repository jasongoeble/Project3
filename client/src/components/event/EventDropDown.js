
import React, { Component } from 'react';
import CreateEventForm from "../event/CreateEventForm";


class EventDropDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
        listOpen: false
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

  }


handleClickOutside(){
    this.setState({
      listOpen: false
    })
  };

  //sets list open state to true or false on click
  toggleList(){
    
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
    // this.props.updateEventList();
  }

  render() {
    const { updateEventList } = this.props;


    return (
      <div className="dropdown">
        <button onClick={() => this.toggleList()}>Create an Event</button>
        <div className="showItems">{this.state.listOpen && <CreateEventForm toggleList={this.toggleList.bind(this)} updateEventList={updateEventList}  /> }</div>


      </div>

    );
  }
}

export default EventDropDown;






