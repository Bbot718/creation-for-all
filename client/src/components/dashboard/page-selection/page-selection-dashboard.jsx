import React, {useState, useEffect} from 'react';
import Axios from 'axios'


const PageSelectionDashboard = (props) => {
  const [pages, SetPages] = useState([]);

  useEffect(() => {

    const request = (props.hasCarouselle) ? "/pageWCarouselle" : "/page";

    Axios
    .get("http://localhost:3001" +request)
    .then(res => { SetPages(res.data) })
    .catch(e => console.log(e));
  },[pages])

  return(
    <div className="page-selection-dashboard">
        {pages.map((page, i) => {
          return(
            <button   className={`page-selection-dashboard__button ${(i === props.currentPage) ? "page-selection-dashboard__button--selected" : ""}`}
                      onClick={() => props.setCurrentPage(i)}>
              {page.name}
            </button>
           
          )
        })}
    </div>
  )
}

export default PageSelectionDashboard;