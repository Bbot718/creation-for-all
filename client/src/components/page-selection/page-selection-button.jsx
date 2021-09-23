import React, {useEffect, useRef, useState} from 'react';

const PageSelectionButton = (props) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    (props.currentPage === props.id) ? setActive(true) : setActive(false);
  }, [props.currentPage])

  return(
    (active) ? 
      <li className={ "page-selection__item page-selection__item--selected"} onClick={() => props.switchPage(props.id)} >
        <div className={(props.toggle) ? "secondary-heading secondary-heading--selected" : "secondary-heading secondary-heading--selected secondary-heading--selected--alt-color"}>
          {props.name}
        </div> 
      </li>
    :
      <li className={ "page-selection__item "} onClick={() => props.switchPage(props.id)} >
        <div className={"secondary-heading secondary-heading--selected"}>
          {props.name}
        </div>
      </li>
  )
}

export default PageSelectionButton;