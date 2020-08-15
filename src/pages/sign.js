import React, { Fragment, useState } from "react"
import styles from "./sign.module.css"
import { Container, Row, Col, FormGroup } from "reactstrap"
import cx from "classnames"
import LoginNavigation from "../components/common/navigation/loginNav"

const sign = () => {
    const [user, setUser] = useState(initialState)
  return (
    <Fragment>
      <LoginNavigation />
      <div
        style={{ backgroundColor: "#098c8c" }}
      >
        <div
          className={styles.pageContentBge5}
        >
          <Container>
            <div className={styles.container} >
              <div className={styles.loginWrap} >
                <div className={styles.loginContent} style={{ borderRadius: "10px" }}>
                  <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                      <h4>Sign into Moneyvest</h4>
                    </Col>
                  </Row>
                  <br />
                  <div className={styles.loginForm}>
                    <form>
                      <FormGroup>
                        <label for="user">User</label>
                        <input
                          className={cx(styles.auInput, styles.auInputFull)}
                          id="password"
                          type="email"
                          name="email"
                          placeholder="Email"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label for="password">Password</label>
                        <input
                          className={cx(styles.auInput, styles.auInputFull)}
                          id="password"
                          type="password"
                          name="password"
                          placeholder="Password"
                        />
                      </FormGroup>
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
                        User & Password:
                        <a href="!#"> {"  "}guest</a>
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
