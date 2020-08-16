import React, { Fragment } from "react"
import styles from "./sign.module.css"
import { Container, Row, Col, FormGroup } from "reactstrap"
import cx from "classnames"
import LoginNavigation from "../components/common/navigation/loginNav"
import { Redirect, Route } from "react-router-dom"
import { Link } from "gatsby"

const sign = () => {
  return (
    <Fragment>
      <LoginNavigation />
      <div style={{ backgroundColor: "#098c8c" }}>
        <div className={styles.pageContentBge5}>
          <Container>
            <div className={styles.container}>
              <div className={styles.loginWrap}>
                <div
                  className={styles.loginContent}
                  style={{ borderRadius: "10px" }}
                >
                  <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                      <h4>Sign in into Moneyvest</h4>
                    </Col>
                  </Row>
                  <br />
                  <div className={styles.loginForm}>
                    <form>
                      <FormGroup>
                        <label htmlFor="user">Username</label>
                        <input
                          className={cx(styles.auInput, styles.auInputFull)}
                          id="user"
                          type="text"
                          name="user"
                          required
                        />
                      </FormGroup>
                      <FormGroup>
                        <label htmlFor="password">Password</label>
                        <input
                          className={cx(styles.auInput, styles.auInputFull)}
                          id="password"
                          type="password"
                          name="password"
                        />
                      </FormGroup>
                      <Link to="/dashboard" style={{display:"block"}}>
                        <button
                          style={{ marginBottom: "20px" }}
                          className={cx(
                            styles.auBtn,
                            styles.auBtnBlock,
                            styles.auBtnGreen
                          )}
                          type="submit"
                        >
                          sign in
                        </button>
                      </Link>
                      <div className={styles.socialLoginContent}>
                        <div className={styles.socialButton}>
                          <button
                            className={cx(
                              styles.auBtn,
                              styles.auBtnBlock,
                              styles.auBtnBlue
                            )}
                          >
                            sign in with facebook
                          </button>
                          <br />
                          <button
                            className={cx(
                              styles.auBtn,
                              styles.auBtnBlock,
                              styles.auBtnBlue2
                            )}
                          >
                            sign in with twitter
                          </button>
                        </div>
                      </div>
                    </form>
                    <div className={styles.registerLink}>
                      <p>
                        Username & Password:
                        <span style={{ color: "red" }}> {"  "}guest</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Fragment>
  )
}

export default sign
