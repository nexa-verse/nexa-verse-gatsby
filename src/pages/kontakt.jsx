import * as React from "react"
import { Link } from 'gatsby';
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import '../styles/globals.scss'
import ContactForm from "../components/ContactForm"
import Button from "../components/reusable/Button"
import { MdOutlineHandshake } from "react-icons/md";
import { LuSend } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { StaticImage } from "gatsby-plugin-image";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import Signet from "../components/reusable/Signet";

const ContactPage = () => {
  return (
    <>
      <Seo title="Kontakt" description="Skontaktuj się z nami" />
      <Layout>
        <section className="contact-hero">
          <h1 className="headline">skontaktuj się z nami</h1>
          <h2 className="text-buttons">👉 Twoje IT, nasza odpowiedzialność – skontaktuj się z nami!</h2>
          <p className="text">Szukasz partnera, który kompleksowo zadba o całą infrastrukturę IT Twojej firmy? W NexaVerse przejmujemy pełną odpowiedzialność za stabilność, bezpieczeństwo i rozwój Twoich systemów. Napisz lub zadzwoń – wspólnie znajdziemy najlepsze rozwiązania, dzięki którym Twoja firma będzie działać bez zakłóceń! 🚀</p>
          <div className="buttons-container">
            <a href="https://outlook.office.com/owa/calendar/Umwsina360InfraScanbyNexaVerse@nexa-verse.pl/bookings/" target="blank"><Button icon={<MdOutlineHandshake/>} modifier='filled'>Umów spotkanie!</Button></a>
            <a href="#form"><Button icon={<LuSend/>} modifier='outlined'>Napisz do nas!</Button></a>
          </div>
          <div className="reviews">
            <div className="review-card">
              <FcGoogle className="review-icon"/>
              <p className="review-title">--/5</p>
            </div>
            <div className="review-card">
              <StaticImage src="../images/rzetelna_logo.png" className="review-icon" width={140} height={60}/>
              <p className="review-title">--/5</p>
            </div>
          </div>
        </section>
        <section className="contact-cards">
          <div className="card">
            <div className="info">
              <p className="text">Napisz do nas</p>
              <p className="text-buttons">kontakt@nexa-verse.pl</p>
            </div>
            <FaEnvelope className="icon"/>
          </div>
          <div className="card">
            <div className="info">
              <p className="text">Godziny pracy</p>
              <p className="text-buttons">Pn - Pt, 8:00 - 17:00</p>
            </div>
            <MdWork className="icon"/>
          </div>
          <div className="card">
            <div className="info">
              <p className="text">Zadzwoń do nas</p>
              <p className="text-buttons">+48 789 173 186</p>
            </div>
            <FaPhone className="icon"/>
          </div>
        </section>
        <ContactForm id="form"/>
        <Signet/>
      </Layout>
    </>
    
  )
}

export default ContactPage

