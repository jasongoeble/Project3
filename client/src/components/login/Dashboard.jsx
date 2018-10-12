import React from 'react';
import PropTypes from 'prop-types';

const Dashboard = ({ secretData, user }) => (
  <p className="container">
    <h1>
      title="Dashboard"
      subtitle="You should get access to this page only after authentication."
    </ h1>
    {secretData && <h1 style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.name}</strong>!<br />{secretData}</h1>}
  </p>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
