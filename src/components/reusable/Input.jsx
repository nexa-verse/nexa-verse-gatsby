import React from 'react'

const Input = ({name, type='text', label}) => {
  return (
    <div className='field'>
      <label htmlFor={name} className='contact'>{label}</label>
      <input type={type} name={name}/>
      <label htmlFor={name} className='newsletter'>{label}</label>
    </div>
  )
}

export default Input