import React from "react"
import Banner from "../components/Banner"
import DankLine from "../components/DankLine"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Features from "../components/students/Features"
import Process from "../components/students/Process"

const Students = () => (
  <>
    <Banner title="./students" />

    <Layout>
      <SEO title="Students" />
      <Features />
      <DankLine />
      <Process />
    </Layout>
  </>
)

export default Students
