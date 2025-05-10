import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import InBuild from "../components/InBuild"

const ServicesPage = () => {
  return (
    <>
      <Seo title="Usługi" description="Sprawdź co możemy dla Ciebie zrobić!" />
      <Layout>
        <InBuild/>
      </Layout>
    </>
      
  )
}

export default ServicesPage