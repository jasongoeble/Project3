import React, { Component } from 'react';
import "../../styles.scss";
import SignUpForm from "../login/SignUpForm";
import LogoutFunction from "../login/LogoutFunction";
import Auth from '../modules/Auth';


class Navbar extends Component {



    constructor(props) {
        super(props);
        if (localStorage.getItem('token') === "") {
            console.log("not logged in");
            this.state = {
                auth: false
            };
        }
        else {
            console.log("user logged in");
            this.state = {
                auth: true
            };
        }

        this.checkAuth = this.checkAuth.bind(this);

    }


    componentWillMount() {

        console.log(this.state.auth)
    }

    //sets list open state to true or false on click

    checkAuth(){
        if (localStorage.getItem('token') === "") {
            console.log("not logged in");

            this.setState(prevState => ({
                
                auth: !prevState.auth
              }))



              
            console.log(this.state.auth)
        }
        else {
            console.log("user logged in");
            this.setState(prevState => ({
                auth: this.state.auth
              }))
            console.log(this.state.auth)
        }
    
   
      }




        render() {
            let button;

            if (this.state.auth) {
                button = <LogoutFunction checkAuth={this.checkAuth.bind(this)}/>;
            } else {
                button = <SignUpForm checkAuth={this.checkAuth.bind(this)}/>
            }

            return (
                <header className="header mm-slideout sticky">
                    <div id="logo">
                        <a href={"/"}>
                            <h1 className="primary-navigation">
                                codeUP
            </h1>

                        </a>
                    </div>
                    <ul id="top_menu">


                        {button }


                    </ul>
                    <a href="#menu" className="btn_mobile">
                        <div className="hamburger hamburger--spin" id="hamburger">
                            <div className="hamburger-box">
                                <div className="hamburger-inner" />
                            </div>
                        </div>
                    </a>
                    <nav id="menu" className="main-menu">
                        <ul>
                            <li><span><a href={"/home"}>Home</a></span></li>
                            <li><span><a href={"/about"}>About</a></span></li>
                            <li><span><a href={"/profile"}>Profile</a></span></li>
                            <li><span><a href={"/forum"}>Forum</a></span></li>

                        </ul>
                    </nav>
                </header>






            );
        }
    }

    export default Navbar;











