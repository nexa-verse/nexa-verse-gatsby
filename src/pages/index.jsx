import * as React from "react"
import Layout from "../components/Layout"
import '../styles/globals.scss'
import Seo from "../components/Seo"
import InBuild from "../components/InBuild"

const IndexPage = () => {
  return (
    <>
    <Seo/>
    <Layout>
      <InBuild/>  
    </Layout>
    </>
    
  )
}

export default IndexPage

