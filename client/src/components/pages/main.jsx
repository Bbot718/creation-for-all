import React, {useState, useEffect} from 'react';

import Title from '../title/title';
import PageSelection from '../page-selection/page-selection';
import Text from '../text/text'
import Footer from '../footer/footer'

const Main = (props) => {
  const [elementsToggle, setElementsToggle] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLanguage, setCurrentLanguage] = useState(null);

  const SwitchPage = (id) => setCurrentPage(id);
  const LanguageSwitch = (id) => setCurrentLanguage(id);

  useEffect(() => {
    (currentPage > 2) ? setElementsToggle(true) : setElementsToggle(false);
  },[currentPage])

  return(
    <div className={(elementsToggle) ? "main" : "main main--alt-color"}>
      <Title toggle={elementsToggle} languageSwitch={LanguageSwitch} switchPage={SwitchPage}/>
      <PageSelection currentPage={currentPage} currentLanguage={currentLanguage} switchPage={SwitchPage} languageSwitch={LanguageSwitch}/>
      <Text currentPage={currentPage} currentLanguage={currentLanguage} switchPage={SwitchPage} languageSwitch={LanguageSwitch} />
      <Footer />
    </div>
  )
}

export default Main;