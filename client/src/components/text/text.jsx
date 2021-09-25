import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import classNames from 'classnames';

const Text = (props) => {
  const [languages, setLanguages] = useState([]);  
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    Axios
    .get('http://localhost:3001/language')
    .then(res => { setLanguages(res.data) })
    .catch(e => console.log(e));

    Axios
    .get('http://localhost:3001/content', {params: {page: props.currentPage}})
    .then(res => { setTexts(res.data) })
    .catch(e => console.log(e));
  },[props.currentPage])

  const HandleClick = (id) => {
    props.languageSwitch(id);
    props.currentPage === 1 && props.switchPage(2);
  }

  const textItemClass = classNames(
    'text-item',
    {'text-item--default': props.currentPage === 1}
  );

  return(
    <div className="text">
      {languages.map((language, i) => {
        return(
          <div className={textItemClass + ((language.language_id === props.currentLanguage) ? " text-item--selected" : "")}>
            <div onClick={() => HandleClick(language.language_id)} className="text-item__button">
              <div className="secondary-heading text-item__button__text">
                {language.name}
              </div>
            </div>
            <div className="text-item__text">
              {texts.map((text, i) => {
                return((text.language_id === language.language_id) && <p className="regular-text">{text.text}</p>)
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Text;