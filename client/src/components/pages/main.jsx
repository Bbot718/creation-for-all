import React, {useEffect, useState, useRef} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Title from '../title/title';
import PageSelection from '../page-selection/page-selection';
import Home from './home';
import Goals from './goals';
import Participate from './participate';
import Portrait from './portrait';
import Footer from '../footer/footer'

const Main = (props) => {

  return(
    <div className="main">
        <Title />
        <PageSelection />
        <Router>
            <Route exact={true} path="/main/" component={Home} />
            <Route path={"main/goals"} component={Goals} />
            <Route path={"main/participate"} component={Participate} />
            <Route path={"main/portrait"} component={Portrait} />
        </Router>
        <Footer />
    </div>
  )
}

export default Main;