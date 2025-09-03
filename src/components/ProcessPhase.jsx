import React from 'react'

const ProcessPhase = ({nr, title, desc}) => {
  return (
    <div className='process-phase'>
        <h1 className="headline">{nr}</h1>        
        <h2 className="subheadline">{title}</h2>
        <p className="text">{desc}</p>
    </div>
  )
}

export default ProcessPhase