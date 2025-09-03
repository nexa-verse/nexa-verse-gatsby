import React from 'react'

const Service = ({icon, text, active, onClick}) => {
  return (
    <li className={active ? "service active" : "service"} onClick={onClick}>
        {icon && <div className="service__icon">{icon}</div>}
        {text && <p className="service__text">{text}</p>}
    </li>
  )
}

export default Service