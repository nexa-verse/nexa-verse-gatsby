import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import InBuild from "../components/InBuild"

const CaseStudiesPage = () => {
  return (
    <>
      <Seo title="Realizacje" description="Zobacz nasze zrealizowane projekty" />
      <Layout>
        <InBuild/>
      </Layout>
    </>
      
  )
}

export default CaseStudiesPage