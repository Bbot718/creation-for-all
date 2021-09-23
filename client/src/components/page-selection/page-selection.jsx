import React, {useEffect, useRef, useState} from 'react';
import Axios from 'axios';

import PageSelectionButton from './page-selection-button';

const PageSelection = (props) => {
  const [pages, setPages] = useState([]);
  
  const SwitchPage = (id) => props.switchPage(id);

  useEffect(() => {
    Axios
    .get("http://localhost:3001/page")
    .then(res => { setPages(res.data) })
    .catch(e => console.log(e));
  },[])

  

  return(
    <ul className="page-selection">
      {pages.map((page, i) => {
        return(
          page.page_id != 1 && <PageSelectionButton currentPage={props.currentPage} id={page.page_id} name={page.name} switchPage={SwitchPage} />
        )
      })

      }
    </ul>
  )
}

export default PageSelection;