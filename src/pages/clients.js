import React from "react"
import Banner from "../components/Banner"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Services from "../components/clients/Services"
import DankLine from "../components/DankLine"
import Process from "../components/clients/Process"

const Clients = () => {
  return (
    <>
      <Banner title="./clients" />

      <Layout>
        <SEO title="Clients" />
        <Services />
        <DankLine />
        <Process />
      </Layout>
    </>
  )
}

export default Clients
