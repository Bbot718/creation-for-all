import React, {useRef, useState} from 'react';
import gsap from 'gsap';

const ElementToggle = (props) => {
  const [toggle, setToggle] = useState(false);
  const arrow= useRef();

  const Toggle = () => {
    setToggle(!toggle)
    gsap.set(arrow.current, {rotation: (!toggle) ? 90: 0});
  }
  return(
    <div className="element-toggle">
      <div onClick={Toggle} className="element-toggle__button ">
        <span className="element-toggle__label tertiary-heading">{props.label}</span>
        <div ref={arrow} className="element-toggle__arrow regular-heading">{' ➺'}</div>
      </div>
      {toggle && props.content}
    </div>
  )
}

export default ElementToggle;