import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import InBuild from "../components/InBuild"

const SuccessPage = () => {
  return (
    <>
      <Seo description="Formularz wysłany" />
      <Layout>
        <InBuild/>
      </Layout>
    </>
      
  )
}

export default SuccessPage
