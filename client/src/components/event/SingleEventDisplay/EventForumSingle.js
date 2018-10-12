import React, { Component } from 'react';
import axios from "axios";
import { Container, Row } from 'mdbreact';
import EventDiscussionBox from "./EventDiscussionBox";



class EventForumSingle extends Component {


    constructor(props) {
        super(props);

        this.state = {


            title: "",
            content: "",
            user_id: localStorage.getItem("token"),


            getPost: [],
            event_id: localStorage.getItem("event_id"),
        };

        // this.handleChange = this.handleChange.bind(this);
        this.handlePostSubmit = this.handlePostSubmit.bind(this);
        this.handlePostChange = this.handlePostChange.bind(this);
        // this.updateDiscussion = this.updateDiscussion.bind(this);
    }



    handlePostChange = event => {
        this.setState({
            [event.target.name]: event.target.value

        });
    }

    handlePostSubmit = event => {
        event.preventDefault();


        let postInfo = {

            event_id: this.state.event_id,
            title: this.state.title,
            content: this.state.content,
            user_id: this.state.user_id


        };
        let id = this.state.event_id;
        console.log(postInfo);
        axios({
            method: 'post',
            url: '/auth/api/post/' + id,
            data: postInfo,
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

    };

    componentWillUpdate() {
        let id = this.state.event_id

        // create an AJAX request
        axios.get("/auth/api/posts/" + id)
            .then(res => {
                this.setState({

                    getPost: res.data

                });



            });

    };

    componentDidMount() {
        let id = this.state.event_id
        console.log("hello world")
        axios.get("/auth/api/posts/" + id)
            .then(res => {
                console.log(res.data);
                this.setState({

                    getPost: res.data

                });
                console.log(this.state.getPost)
            })
    }







    render() {


        return (
            <Container style={{ maxWidth: '80%' }}>
                <Row>
                    <h1> Post to DiscussionBoard</h1>

                    {this.state.getPost.map((getPost) => {
                        return <EventDiscussionBox updateDiscussion={this.updateDiscussion} getPost={getPost} key={getPost.user_id}
                        />
                    })

                    }

                </Row>
                <Row>

              




                    <form onSubmit={this.handlePostSubmit} >
                        <div class="form-group">
                            <label>Post Title: </label>
                            <input className="InputField" type="text" name="title" className="discussionInputs form-control" value={this.state.title} onChange={this.handlePostChange}></input>
                        </div>
                        <div class="form-group">

                            <label> Post:</label>
                            <textarea className="discussionInputs" type="text" name="content" rows="6" className="discussionInputs form-control" value={this.state.content} onChange={this.handlePostChange} placeholder="What are your thoughts?"></textarea>
                        </div>
                        <button type="submit" className="btn_1 rounded add_bottom_30" >Submit</button>
                    </form>



                </Row>
            </Container>
        );
    }
}

export default EventForumSingle;