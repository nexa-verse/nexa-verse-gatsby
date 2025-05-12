import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import '../styles/globals.scss'
import ContactForm from "../components/ContactForm"

const ContactPage = () => {
  return (
    <>
      <Seo title="Kontakt" description="Skontaktuj się z nami" />
      <Layout>
        <ContactForm/>
      </Layout>
    </>
    
  )
}

export default ContactPage

