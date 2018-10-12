import React, { Component } from 'react';
import axios from 'axios';
import EditProfileDropDown from "../profile/EditProfileDropDown"

class ProfileContent extends Component {
    constructor(props) {
        super(props);

        this.state = {

            firstName: "",
            lastName: "",
            city: "",
            state: "",
            age: "",
            gender: "",
            gitHub: "",
            linkedIn: ""
            // events: {
            //     attended: "",
            //     registered: ""
            // }
      
          };


        // this.getEventDetails = this.getEventDetails.bind(this);

    }
    //handles input values of form





    render() {


        return (
            <div className="">
                <div className="container">
                    <div className="row">

                        <br />
                      <EditProfileDropDown />

                    


                    </div>


                </div>


            </div>


        );
    }
}

export default ProfileContent;