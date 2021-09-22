import React, {useState, useEffect} from 'react';
import Axios from 'axios';

import PageSelectionDashboard from '../page-selection/page-selection-dashboard';

const ContentDashboard = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [languages, setLanguages] = useState([]);
  const [contents, setContents] = useState([]);

  useEffect(() => {
    Axios
    .get('http://localhost:3001/language')
    .then(res => { setLanguages(res.data) })
    .catch(e => console.log(e));

    Axios
    .get('http://localhost:3001/content', {params: {page: currentPage}})
    .then(res => { setContents(res.data) })
    .catch(e => console.log(e));
  }, [contents])

  const SetCurrentPage = (id) => {
    setCurrentPage(id)
  }

  

  return(
    <div className="content-dashboard">
      <PageSelectionDashboard hasCarouselle={false} currentPage={currentPage} setCurrentPage={SetCurrentPage} />
      <form className="content-dashboard__container">
      {languages.map((language, i) => {
        return(
          <div className="content-dashboard__item">
          <div className="content-dashboard__language bold-text">{language.name}</div>
          {contents.map((content, j) => {
              
          })}
          </div>
        )
      })}
        
      </form>

  
    </div>
  )
}

export default ContentDashboard;