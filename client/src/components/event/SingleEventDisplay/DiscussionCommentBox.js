
import React, { Component } from 'react';
import axios from "axios";


class CommentDropDown extends Component {
    constructor(props) {
        super(props);

        this.state = {

            

                post_id: this.props.post_id,
                event_id: localStorage.getItem("event_id"),
                user_id: localStorage.getItem("token"),
                content: ""
            
        };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // onSubmit={this.handlePostSubmit}

        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.checkProps = this.checkProps.bind(this);

    }

    handlePostChange = event => {
        this.setState({
            [event.target.name]: event.target.value

        });
    }




    handleCommentChange = event => {
        this.setState({
            [event.target.name]: event.target.value

        });
    }

    handleCommentSubmit = event => {
        event.preventDefault();
        let post_id = this.props.post_id;

        let commentInfo = {

            event_id: this.state.event_id,
            post_id: this.state.post_id,
            content: this.state.content,
            user_id: this.state.user_id


        };
        console.log(commentInfo);
        axios({
            method: 'post',
            url: '/auth/api/comment/' + post_id,
            data: commentInfo,
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
    };

    checkProps(event) {
        event.preventDefault();
        console.log(this.props.post_id);
    }


    render() {


        return (
            <div className="dropdown">
                    <div className="form-group text-center">


                    <form onSubmit={this.handleCommentSubmit} >

                        <label> Comment:</label>
                        <br />
                        <textarea className="discussionCommentTextarea" type="text" name="content" value={this.state.content} onChange={this.handleCommentChange} placeholder="What are your thoughts?!"></textarea>
                        <br />
                        <button type="submit" >Submit</button>
                        </form>
                    </div>
            </div>

        );
    }
}

export default CommentDropDown;

