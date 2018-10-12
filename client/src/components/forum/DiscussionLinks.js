import React, { Component } from 'react';
import "../../styles.scss";
class DiscussionLinks extends Component {

    constructor(props) {
        super(props);

        this.state = {
            thread: "events"
        };
        this.onClick = this.onClick.bind(this);


    }

    onClick = event => {
        this.setState({
            thread: event.target.value
        })
        console.log(this.state.thread);
    }



    render() {

        return (
            <div className="">
                <ul className="">
                    <li className="discussion"><a href={"forum/events"} onClick={this.onClick} value="events">Events</a></li>
                    <li className="discussion"><a href={"forum/research"} value="research">Research</a></li>
                    <li className="discussion"><a href={"forum/develop"} value="develop">Develop</a></li>
                </ul>
            </div>


        );
    }
}

export default DiscussionLinks;