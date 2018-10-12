import React, { Component } from 'react';
import "../../styles.scss";
import DiscussionLinks from "./DiscussionLinks";

class DiscussionBoard extends Component {



    render() {


        return (
            <div className="">
            
                <div className="row">
                    <div className="col-md-6">
                        <DiscussionLinks />
                    </div>
                    <div className="col-md-6">
                    
                    </div>
                </div>
            </div>


        );
    }
}

export default DiscussionBoard;