import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import SignetUrl from '../../images/signet.png'

const Signet = () => {
  return (
    <div className='signet'>
      <StaticImage src={'../../images/signet.png'} alt="nexa verse signet" className='signet-image' />
    </div>
  )
}

export default Signet