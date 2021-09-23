import React from 'react';

import mail from '../../assets/icons/mail.png'
import facebook from '../../assets/icons/facebook.png'
import instagram from '../../assets/icons/instagram.png'

const Footer = (props) => {

  return(
    <div className="footer">
      <img className="footer__image" src={mail} />
      <img className="footer__image" src={facebook} />
      <img className="footer__image" src={instagram} />
    </div>
  )
}

export default Footer;