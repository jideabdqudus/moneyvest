import React, { Fragment } from "react"

import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"

const Home = () => {
  return (
    <Fragment>
      <SEO title="Home" />
      <Navigation />
      <Header />
      <Features /> 
      <GetStarted />
      <Footer />
    </Fragment>
  )
}

export default Home
