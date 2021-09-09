import React from 'react';

import ElementToggle from './element-toggle/element-toggle';

const Dashboard = (props) => {

  return(
    <div className="private">
      <ElementToggle label={'users'} content={'hello'} />
      <ElementToggle label={'carouselle'} content={'hello'} />
      <ElementToggle label={'content'} content={'hello'} />
    </div>
  )
}

export default Dashboard;