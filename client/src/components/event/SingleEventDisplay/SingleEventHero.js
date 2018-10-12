import React, { Component } from 'react';
import axios from "axios";
import "../../../styles.scss"
class SingleEventHero extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         userSearch: ""
    //     };

    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);

    // }
    // //handles input values of form


    // handleChange = event => {
    //     this.setState({
    //         userSearch: event.target.value

    //     });
    // }


    // handleSubmit = event => {
    //     event.preventDefault();
    //     let search = this.state.userSearch
    //     console.log(search);
    //     axios.get("api/events/" + search)
    //         .then(res => {
    //             console.log(res.data);

    //         })
    //         .then(function (response) {
    //             //handle success
    //             console.log(response);
    //         })
    //         .catch(function (response) {
    //             //handle error
    //             console.log(response);
    //         });
    // }

    render() {

        return (
            <section class="hero_in tours_detail">
                <div class="wrapper">
                    <div class="container">
                        <h1 class="fadeInUp"><span></span>Event Details</h1>
                    </div>
                    <span class="magnific-gallery">
                    <a href="img/event-details-1600x1067.jpg" class="btn_photos" title="Photo title" data-effect="mfp-zoom-in">View photos</a>
					<a href="img/event-one.jpg" title="Photo title" data-effect="mfp-zoom-in"></a>
					<a href="img/gallery/tour_list_3.jpg" title="Photo title" data-effect="mfp-zoom-in"></a>
                    </span>
                </div>
            </section>






        );
    }
}

export default SingleEventHero;