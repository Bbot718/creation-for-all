import React, { useState } from 'react';

import Login from './login/login';
import Private from './private';


const Dashboard = (props) => {
  const [loginStatus, setLoginStatus] = useState();
  const [isLogin, setIsLogin] = useState();

  const SetLoginStatus = (status, isLogin) => {
    setLoginStatus(status);
    setIsLogin(isLogin);
  }

  const Logout = () => {
    setIsLogin(false);
    setLoginStatus("");
  }

  return(
    <div className="dashboard">
      <div className="dashboard__title">
        <span className="secondary-heading">Creation For All</span>
      </div>
      {(isLogin === true) ? <Private user={loginStatus} logout={Logout} /> : <Login loginStatus={loginStatus} setLoginStatus={SetLoginStatus} />}
    </div>
  )
}

export default Dashboard;