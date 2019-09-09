import React from "react"
import Banner from "../components/Banner"
import ChoiceSection from "../components/ChoiceSection"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <Banner />

    <Layout>
      <SEO title="Home" />
      <ChoiceSection />
    </Layout>
  </>
)

export default IndexPage
