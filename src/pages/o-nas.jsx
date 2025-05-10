import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import InBuild from "../components/InBuild"

const AboutPage = () => {
  return (
    <>
      <Seo title='O nas' description="Formularz wysłany" />
      <Layout>
        <InBuild/>
      </Layout>
    </>
      
  )
}

export default AboutPage