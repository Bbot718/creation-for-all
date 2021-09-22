import React, {useState, useEffect} from 'react';

import Title from '../title/title';
import PageSelection from '../page-selection/page-selection';
import Footer from '../footer/footer'

const Main = (props) => {

  return(
    <div className="main">
        <Title toggle={false} />
        <PageSelection />
        <Footer />
    </div>
  )
}

export default Main;