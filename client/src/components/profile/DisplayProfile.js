import React, { Component } from 'react';
import axios from "axios";

class DisplayProfile extends Component {


    constructor(props) {
        super(props);

        this.state = {
            profile: "",
            id: localStorage.getItem("token"),
            isInEditMode: false,
            age: "",
            city: "",
            state: "",
            gender: "",
            github: "",
            linkedin: "",
            image: ""
        };

        //   this.updateEventList = this.updateEventList.bind(this);

        // this.getEventDetails = this.getEventDetails.bind(this);

    }

    editButtonFunction = () => {
        this.setState({
            isInEditMode: true
        })
    }

    changeEditMode = () => {
        let profile = this.state.profile;
        this.setState({
            isInEditMode: !this.state.isInEditMode,
            age: profile.age,
            city: profile.city,
            state: profile.state,
            gender: profile.gender,
            github: profile.github,
            linkedin: profile.linkedin,
            image: profile.image

        })
    }

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    componentDidMount() {
        let id = this.state.id
        console.log(id + "id check");
        if (this.state.id == null) {
            console.log("no user id");
        }
        else {
            axios.get("/auth/api/profile/" + id)
                .then(res => {
                    console.log(res.data[0]);
                    console.log(this.state.profile);
                    let profile = res.data[0];

                    this.setState({
                        age: profile.age,
                        city: profile.city,
                        state: profile.state,
                        gender: profile.gender,
                        github: profile.github,
                        linkedin: profile.linkedin,
                        profile: profile,
                        image: profile.country
                    })

                    console.log(this.state.profile);

                })
        }
    }

    updateComponentValue = () => {
        this.setState({
            isInEditMode: false,
        })

        let id = this.state.id
        let updatedProfile = {
            // firstName: this.state.firstName,
            // lastName: this.state.lastName,
            city: this.state.city,
            state: this.state.state,
            age: this.state.age,
            gender: this.state.gender,
            github: this.state.github,
            linkedin: this.state.linkedin,
            user_id: this.state.id,
            image: this.state.image


        };

        // create an AJAX request
        axios({
            method: 'put',
            url: '/auth/api/profile/' + id,
            data: updatedProfile,
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


    renderDefaultView = () => {
        return (
            <div className="">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={this.state.image} className="App-logo" alt="logo" />
                        </div>
                        <div className="col-md-6">
                            <li>

                                <br /> City: {this.state.city}
                                <br /> State: {this.state.state}
                                <br /> Age: {this.state.age}
                                <br /> Gender: {this.state.gender}
                                <br /> GitHub: {this.state.github}
                                <br /> LinkedIn: {this.state.linkedin}
                            </li>


                            <button onClick={this.editButtonFunction}>Edit Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderEditView = () => {
        return <div className="">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={this.state.image} className="App-logo" alt="logo" />
                </div>
                <div className="col-md-6">
                    <li>

                    <br /> City: <input type="text" defaultValue={this.state.city} onChange={this.handleInputChange} name="city" />
                    <br /> State: <input type="text" defaultValue={this.state.state} onChange={this.handleInputChange} name="state" />
                    <br /> Age: <input type="text" defaultValue={this.state.age} onChange={this.handleInputChange} name="age" />
                    <br /> Gender: <input type="text" defaultValue={this.state.gender} onChange={this.handleInputChange} name="gender" />
                    <br /> GitHub: <input type="text" defaultValue={this.state.github} onChange={this.handleInputChange} name="github" />
                    <br /> LinkedIn: <input type="text" defaultValue={this.state.linkedin} onChange={this.handleInputChange} name="linkedin" />

                    </li>


                     <button onClick={this.changeEditMode}> X </button>
                     <button onClick={this.updateComponentValue}> OK </button>                </div>
            </div>
        </div>
    </div>
    }



    // <button onClick={this.changeEditMode}> X </button>
    // <button onClick={this.updateComponentValue}> OK </button>
    // First Name: {this.state.profile.firstName}
    // <br /> Last Name: {this.state.profile.lastName}

    render() {


        return this.state.isInEditMode ?
            this.renderEditView() :
            this.renderDefaultView()

    }
}

export default DisplayProfile;