import React, {useState} from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Button from './reusable/Button'
import { Link } from 'gatsby'
import {IoClose, IoMenu} from 'react-icons/io5'
import { FaPhone } from 'react-icons/fa'
import { MdConnectWithoutContact } from "react-icons/md";

const Header = () => {

  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false)

  return (
    <nav className='navbar'>
      <Link className="logo" to='/'>
        <StaticImage src='../images/logo/logo_outline_basic.svg'/>
      </Link>
      <ul className='menu-desktop'>
        <div className='menu-desktop__links'>
          <li className='link'>
            <Link to='/o-nas'>O nas</Link>
          </li>
          <li className='link'>
            <Link to='/uslugi'>Usługi</Link>
          </li>
          <li className='link'>
            <Link to='/realizacje'>Realizacje</Link>
          </li>
        </div> 
        <Link to='/kontakt'>
          <Button icon={<MdConnectWithoutContact/>} modifier='filled'>
          Skontaktuj się z nami! 
          <span className='phone'><FaPhone/>+48 789 173 186</span>
          </Button>
        </Link>       
        
      </ul>
      <ul className={`menu-mobile ${isMobileMenuOpened ? 'menu-mobile--opened' : ''}`}>
        <div className="menu-mobile__links">
          <li className='link'>
            <Link to='/o-nas' onClick={() => setIsMobileMenuOpened(false)}>O nas</Link>
          </li>
          <li className='link'>
            <Link to='/uslugi' onClick={() => setIsMobileMenuOpened(false)}>Usługi</Link>
          </li>
          <li className='link'>
            <Link to='/realizacje' onClick={() => setIsMobileMenuOpened(false)}>Realizacje</Link>
          </li>
          <Link to='/kontakt' onClick={() => setIsMobileMenuOpened(false)}>
            <Button icon={<MdConnectWithoutContact/>} modifier='filled'>
            Skontaktuj się z nami!
            </Button>
          </Link>    
        </div>
        
      </ul>
      <button className="hamburger" onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)}>
        {isMobileMenuOpened ? <IoClose/> : <IoMenu/>}
      </button>
    </nav>
  )
}

export default Header