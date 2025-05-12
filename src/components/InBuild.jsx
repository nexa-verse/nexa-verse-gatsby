import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { PiMapPinAreaFill } from "react-icons/pi";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import Button from './reusable/Button'
import { Link } from 'gatsby';

const InBuild = () => {
  return (
    <section className='in-build'>
        <h2 className='subheadline'>Nasza strona dopiero powstaje,<br/> ale <span className='headline'>ty</span> skorzystaj z naszych usług już dziś</h2>
        <StaticImage className='image' src="../images/in_build.png" alt="Strona w budowie" width={150} height={240} />
        <p className='text'><PiMapPinAreaFill/>Obsługujemy  firmy z Wrocławia i powiatów sąsiadujących</p>
        <p className='text'>Zadzwoń do nas lub napisz maila. Odpowiedź w ciągu  24h gwarantowana!</p>
        <div className="container">
            <p className="text"><FaPhone/>+48 789 173 186</p>
            <p className="text"><FaEnvelope/>kontakt@nexa-verse.pl</p>
        </div>
        <Link to='/kontakt'><Button icon={<LuSend/>} modifier='filled'>Napisz do nas!</Button></Link>
    </section>
  )
}

export default InBuild