import React, { Component } from 'react';
import axios from "axios";
import "../../styles.scss"
class HeroSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userSearch: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    //handles input values of form


    handleChange = event => {
        this.setState({
            userSearch: event.target.value

        });
    }


    handleSubmit = event => {
        event.preventDefault();
        //regex replaces any and all spaces with &20
        let search = this.state.userSearch.replace(/\s+/g, '&20')
        console.log(search);
        axios.get("/auth/api/search/" + search)
            .then(res => {
                console.log(res.data);

            })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }

    render() {

        return (
            <section className="hero_single version_2">
                <div className="wrapper">
                    <div className="container">
                        <h3>Find Popular Events</h3>
                        <p>From hackathons to other stuff we can write as a team</p>
                        <form>
                            <div className="row no-gutters custom-search-input-2">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input className="form-control" type="text" placeholder="State, City..." />
                                        <i className="icon_pin_alt" />
                                    </div>
                                </div>
                                {/* <div className="col-lg-4">
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="dates" placeholder="When.." />
                                        <i className="icon_calendar" />
                                    </div>
                                </div> */}
                                <div className="col-lg-6">
                                    <input type="submit" className="btn_search" defaultValue="Search" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>






        );
    }
}

export default HeroSearch;