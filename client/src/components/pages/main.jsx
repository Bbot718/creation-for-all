import React, {useState, useEffect} from 'react';

import Title from '../title/title';
import PageSelection from '../page-selection/page-selection';
import Text from '../text/text'
import Footer from '../footer/footer'

const Main = (props) => {
  const [elementsToggle, setElementsToggle] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const SwitchPage = (id) => setCurrentPage(id);
  

  useEffect(() => {
    (currentPage > 2) ? setElementsToggle(true) : setElementsToggle(false);
  },[currentPage])

  return(
    <div className={(elementsToggle) ? "main" : "main main--alt-color"}>
      <Title toggle={elementsToggle} switchPage={SwitchPage}/>
      <PageSelection currentPage={currentPage} switchPage={SwitchPage} />
      <Text />
      <Footer />
    </div>
  )
}

export default Main;