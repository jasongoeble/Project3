
import React, { Component } from 'react';
import EditProfile from "./EditProfile";

class EditProfileDropDown extends Component {
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
    // const { updateEventList } = this.props;


    return (
      <div className="dropdown">
        <button onClick={() => this.toggleList()}>Edit Profile</button>
        <div className="showItems">{this.state.listOpen && <EditProfile toggleList={this.toggleList.bind(this)}  /> }</div>


      </div>

    );
  }
}

export default EditProfileDropDown;






