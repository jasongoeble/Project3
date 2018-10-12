import React, { Component } from 'react';
import axios from "axios";



class JoinEvent extends Component {


    constructor(props) {
        super(props);

        this.state = {

            user_id: localStorage.getItem("token"),
            event_id: localStorage.getItem("event_id"),
        };

        // this.handleChange = this.handleChange.bind(this);
        this.handleEventSignup = this.handleEventSignup.bind(this);
        // this.handlePostChange = this.handlePostChange.bind(this);
        // this.updateDiscussion = this.updateDiscussion.bind(this);
    }



    handlePostChange = event => {
        this.setState({
            [event.target.name]: event.target.value

        });
    }

    handleEventSignup = event => {


    };


    componentDidMount() {




    }







    render() {


        return (

            <div className="box_detail booking">
            <div className="price">
                <span>Event Signup</span>
            </div>

         

            <a href="#0" className="btn_1 full-width purchase">Join Event</a>
            <a href="wishlist.html" className="btn_1 full-width outline wishlist"><i className="icon_heart"></i> Add to my events</a>

            <ul className="share-buttons">
                <li><a className="fb-share" href="#0"><i className="social_facebook"></i> Share</a></li>
                <li><a className="twitter-share" href="#0"><i className="social_twitter"></i> Tweet</a></li>
                <li><a className="gplus-share" href="#0"><i className="social_googleplus"></i> Share</a></li>
            </ul>
            </div>
        );
    }
}

export default JoinEvent;