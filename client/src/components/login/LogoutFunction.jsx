import React from 'react';
import PropTypes from 'prop-types';


class LogoutFunction extends React.Component {


  constructor(props) {
    super(props, );

 
    this.deauthenticateUser = this.deauthenticateUser.bind(this);


  }



  deauthenticateUser() {
    localStorage.setItem('token', ""); 
    this.props.checkAuth();
  }

  render() {
    return (
      <div>
      <li><a onClick={this.deauthenticateUser } href="" id="" title="Log Out">Log Out</a></li>
      </div>
    )
  }
}

LogoutFunction.contextTypes = {
  router: PropTypes.object.isRequired
};

export default LogoutFunction;
