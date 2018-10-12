import React, { Component } from 'react';
import logo from "../../logo.svg";
import "../../styles.scss";

class AboutSection extends Component {



    render() {

        return (
            <section className="">
            <div >
                <h2>About the Site</h2>
                <br />
                <img src={logo} style={{ float: 'left' }}  alt="Image" />
                <p>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget ligula erat.
                     Phasellus vel dignissim elit, eu imperdiet ante. Curabitur elementum sapien in massa pulvinar,
                      sed posuere nisi volutpat. Duis velit orci, consectetur sit amet feugiat id, malesuada sit amet urna.
                       Vivamus ante velit, fringilla ut eros non, ullamcorper pulvinar lacus. Donec blandit,
                        erat dapibus ultricies porttitor, erat sapien pulvinar tortor, et pellentesque metus mi vel arcu.
                         In gravida ex nec nisl molestie, quis tristique turpis volutpat. Aenean lacinia,
                          tortor ut finibus lobortis, dui magna bibendum lectus, sed gravida mauris est in dolor.
                </p>
                <img src={logo} style={{ float: 'right' }} height="99" width="99" alt="Image" />
                <p> Duis nulla magna, vestibulum vel vehicula id, feugiat eget mi. Morbi dapibus sagittis ultrices.
                 Donec id ipsum vel est molestie venenatis. Sed eget orci libero. Curabitur non lorem eget eros
                 venenatis luctus id ac massa. Nunc mi nunc, hendrerit eget scelerisque sit amet, iaculis quis ligula.
                 Duis a interdum nisi, quis volutpat leo. Aliquam eleifend eget turpis rutrum euismod.
                </p>

            </div>
        </section>


        );
    }
}

export default AboutSection;