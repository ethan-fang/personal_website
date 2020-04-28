import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { string } from "prop-types"

import CV from '../data/cv_data'
import CVComponent from "../components/CV/cv_component"


const AboutPage = () => {
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>My CV</h1>
      <CVComponent cvData={CV} />
    </Layout>
  )
}

export default AboutPage
