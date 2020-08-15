import React from "react"
import { Router } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Dashboard from "../pages2/dashboard/Dashboard"
import Header from "../components/Header"
import { createBrowserHistory } from "history"
import s from "../components/Layout/Layout.module.scss"
import Hammer from "rc-hammerjs"
import { TransitionGroup, CSSTransition } from "react-transition-group"


const dashboard = props => {
  const handleSwipe = e => {
    if ("ontouchstart" in window) {
      if (e.direction === 4) {
        this.props.dispatch(openSidebar())
        return
      }

      if (e.direction === 2 && this.props.sidebarOpened) {
        this.props.dispatch(closeSidebar())
        return
      }
    }
  }
  return (
    <div>
      <Router history={createBrowserHistory()}>
        <Sidebar />
      </Router>
      <div className={s.wrap}>
        <Header />
        <Hammer onSwipe={handleSwipe}>
          <main className={s.content}>
            <h1 style={{marginBottom:"20px"}}>Dashboard</h1>
            <TransitionGroup>
              <CSSTransition
                key={props.location.key}
                classNames="fade"
                timeout={200}
              >
                <Dashboard />
              </CSSTransition>
            </TransitionGroup>
          </main>
        </Hammer>
      </div>
    </div>
  )
}

export default dashboard
