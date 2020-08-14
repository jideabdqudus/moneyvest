import React from "react"

import "bootstrap/dist/css/bootstrap.min.css"

import { Switch, Route, BrowserRouter } from "react-router-dom"

import Layout from "../components/common/layout/layout"
import Home from "./Home"
import sign from "./sign"
import dashboard from './dashboard'

const IndexPage = () => (
  <BrowserRouter>
    <Switch>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path ="/sign" component={sign}/>
      </Layout>
      <Route exact path ="/dashboard" component={dashboard}/>
    </Switch>
  </BrowserRouter>
)

export default IndexPage
