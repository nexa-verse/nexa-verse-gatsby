
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import { PiMapPinAreaFill } from "react-icons/pi";
import { GoLaw } from "react-icons/go";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__logo--desktop">
        <StaticImage src="../images/logo/logo_basic.svg" alt="Logo"/>
      </div>
      <div className="footer__logo--mobile">
        <StaticImage src="../images/logo/logo_outline_dark.svg" alt="Logo"/>
      </div>
      <section className="footer__section">
        <p className="company-name">Nexa Verse</p>
        <p className="company-localization">
          <PiMapPinAreaFill className="icon" /> 
          <span className='data'>Sterowcowa 13 lok. 2 <br/> 54-130 Wrocław </span>
        </p>
        <p className="company-financial">
          <GoLaw className="icon" /> 
          <span className='data'>NIP: 894-231-97-57 <br/> REGON: 020239197</span>
        </p>
      </section>
      <section className="footer__section">
        <p className="company-phone">
          <FaPhone className="icon" /> 
          <span className='data'>+48 789 173 186</span>
        </p>
        <p className="company-mail">
          <FaEnvelope className="icon" /> 
          <span className='data'>kontakt@nexa-verse.pl</span>
        </p>
      </section>
      
    </footer>
  )
}

export default Footer
