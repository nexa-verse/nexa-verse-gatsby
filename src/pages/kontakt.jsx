import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import '../styles/globals.scss'

const ContactPage = () => {
  return (
    <>
      <Seo title="Kontakt" description="Skontaktuj się z nami" />
      <Layout>
        <h1>Skontaktuj się z nami</h1>
        <form name="kontakt" method="POST" netlify netlify-honeypot="bot-field">
          {/* Ukryte pole dla botów */}
          <input type="hidden" name="form-name" value="kontakt" />
          <p hidden>
            <label>Nie wypełniaj tego pola: <input name="bot-field" /></label>
          </p>
          <div>
            <label htmlFor="email">Your Email:</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea name="message"></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </Layout>
    </>
    
  )
}

export default ContactPage

