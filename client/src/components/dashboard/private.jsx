import React from 'react';

import ElementToggle from './element-toggle/element-toggle';
import Users from './users/users';

const Dashboard = (props) => {

  return(
    <div className="private">
      <ElementToggle label={'users'} content={<Users user={props.user} logout={props.logout} />} />
      <ElementToggle label={'carouselle'} content={'hello'} />
      <ElementToggle label={'content'} content={'hello'} />
      <div className="private__logout bold-text"><span onClick={() => props.logout()}>Log Out</span></div>
    </div>
  )
}

export default Dashboard;