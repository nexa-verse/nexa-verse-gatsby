import { Link } from 'gatsby'
import React from 'react'

const Service = ({icon, text, url}) => {
  return (
    <li className="service">
      <Link to={url} className="service__link">
        {icon && <div className="service__icon">{icon}</div>}
        {text && <p className="service__text">{text}</p>}
      </Link>
    </li>
  )
}

export default Service