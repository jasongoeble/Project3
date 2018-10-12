import React, { Component } from 'react';
import axios from "axios";

class DisplayOthersSkills extends Component {


    constructor(props) {
        super(props);

        this.state = {
            profile: "",
            id: localStorage.getItem("profileId"),
            skill1: "",
            skill2: "",
            skill3: "",
            skill4: "",
            skill5: "",
            
        };
        
        //   this.updateEventList = this.updateEventList.bind(this);

        // this.getEventDetails = this.getEventDetails.bind(this);

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




    

render() {


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
    
        </div>
    </div>
    );
}
}

export default DisplayOthersSkills;