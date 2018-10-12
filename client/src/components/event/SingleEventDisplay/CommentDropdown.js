
import React, { Component } from 'react';
import DiscussioncommentBox from "./DiscussionCommentBox";

class CommentDropdown extends Component {
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


    return (
      <div className="dropdown">
        <button className="discussionComments"  onClick={() => this.toggleList()}>Reply</button>
        <div className="">{this.state.listOpen && <DiscussioncommentBox toggleList={this.toggleList.bind(this)} post_id={this.props.post_id} toggleList={this.toggleList.bind(this)}   /> }</div>


      </div>

    );
  }
}

export default CommentDropdown;






