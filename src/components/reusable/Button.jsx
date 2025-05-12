import React from 'react'
import {} from 'react-icons'

const Button = ({icon, children, modifier = '', type = '', color=''}) => {
  return (
    <button type={type} className={`button button--${modifier} ${color}`} >
        {icon && <span className="button__icon">{icon}</span>}
        <span className="button__text">{children}</span>        
    </button>
  )
}

export default Button