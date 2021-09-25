import React, {useState, useEffect} from 'react';

const Title = (props) => {
  const [toggle, setToggle] = useState();

  useEffect(() => {
    (props.toggle) ? setToggle("primary-heading--small") : setToggle("");
  }, [props.toggle])

  const  HandleClick = () =>{
    props.switchPage(1);
    props.languageSwitch(null);
  }

  return(
    <div className="title">
      <div className={"primary-heading " + toggle} onClick={HandleClick}>Creation For All</div>
    </div>
  )
}

export default Title;