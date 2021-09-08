import React, { useState } from 'react';

import Login from './login/login';
import Private from './private';


const Dashboard = (props) => {
  const [loginStatus, setLoginStatus] = useState();

  const SetLoginStatus = (status) => {
    setLoginStatus(status);
  }

  return(
    <div className="dashboard">
      <div className="dashboard__title">
        <span className="secondary-heading">Creation For All</span>
      </div>
      {(loginStatus === true) ? <Private /> : <Login loginStatus={loginStatus} setLoginStatus={SetLoginStatus} />}
    </div>
  )
}

export default Dashboard;