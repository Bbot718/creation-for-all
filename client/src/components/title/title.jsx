import React, {useState, useEffect} from 'react';

const Title = (props) => {
  const [toggle, setToggle] = useState();

  useEffect(() => {
    (props.toggle) ? setToggle("primary-heading--small") : setToggle("");
  }, [props.toggle])

  return(
    <div className="title">
      <div className={"primary-heading " + toggle} onClick={() => props.switchPage(1)}>Creation For All</div>
    </div>
  )
}

export default Title;