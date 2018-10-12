import React, { Component } from 'react';
import axios from "axios";

class DisplaySkills extends Component {


    constructor(props) {
        super(props);

        this.state = {
            profile: "",
            id: localStorage.getItem("token"),
            isInEditMode: false,
            skill1: "",
            skill2: "",
            skill3: "",
            skill4: "",
            skill5: "",
            
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
            skill1: profile.skill1,
            skill2: profile.skill2,
            skill3: profile.skill3,
            skill4: profile.skill4,
            skill5: profile.skill5
            
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
                        skill1: profile.skill1,
                        skill2: profile.skill2,
                        skill3: profile.skill3,
                        skill4: profile.skill4,
                        skill5: profile.skill5,
                        profile: profile
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
            skill2: this.state.skill2,
            skill3: this.state.skill3,
            skill1: this.state.skill1,
            skill4: this.state.skill4,
            skill5: this.state.skill5,
            user_id: this.state.id


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

                        <li>

                            <br /> Skill #1: {this.state.skill1}
                            <br /> Skill #2: {this.state.skill2}
                            <br /> Skill #3: {this.state.skill3}
                            <br /> Skill #4: {this.state.skill4}
                            <br /> Skill #5: {this.state.skill5}
                        </li>


                    </div>
                    <button onClick={this.editButtonFunction}>Edit Skills</button>

                </div>
            </div>
        )
    }

    renderEditView = () => {
        return <div>
            <div>
                <li>

                    <br /> Skill #1: <input type="text" defaultValue={this.state.skill1} onChange={this.handleInputChange} name="skill1" />
                    <br /> Skill #2: <input type="text" defaultValue={this.state.skill2} onChange={this.handleInputChange} name="skill2" />
                    <br /> Skill #3: <input type="text" defaultValue={this.state.skill3} onChange={this.handleInputChange} name="skill3" />
                    <br /> Skill #4: <input type="text" defaultValue={this.state.skill4} onChange={this.handleInputChange} name="skill4" />
                    <br /> Skill #5: <input type="text" defaultValue={this.state.skill5} onChange={this.handleInputChange} name="skill5" />

                </li>

            </div>
            <button onClick={this.changeEditMode}> X </button>
            <button onClick={this.updateComponentValue}> OK </button>
        </div>
    }

    // First Name: {this.state.profile.firstName}
    // <br /> Last Name: {this.state.profile.lastName}

    render() {


        return this.state.isInEditMode ?
            this.renderEditView() :
            this.renderDefaultView()

    }
}

export default DisplaySkills;