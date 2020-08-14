import React, { Fragment } from 'react'
import styles from './sign.module.css'
import {Container, FormGroup} from 'reactstrap'

const sign = () => {
    return (
        <Fragment>
        <div className={styles.pageWrapper}>
        <div className={styles.pageContentBge5}>
        <Container>
            <div className={styles.container}>
                <div className={styles.loginWrap}>
                    <div className={styles.loginContent}>
                        
                        <div  className={styles.loginForm}>
                            <form>
                            <FormGroup>
                                    <label for="user">User</label>
                                    <input className="au-input au-input--full" id="password" type="email" name="email" placeholder="Email"/>
                                </FormGroup>
                                <FormGroup>
                                <label for="password">Password</label>
                                    <input className="au-input au-input--full" id="password" type="password" name="password" placeholder="Password"/>
                                </FormGroup>
                                    <button className="au-btn au-btn--block au-btn--green m-b-20" type="submit">sign in</button>
                                
                            </form>
                            <div className="register-link">
                                <p>
                                    User
                                    <a href="!#">guest</a>
                                </p>
                            </div>
                            <div className="register-link">
                                <p>
                                    Password
                                    <a href="!#">guest</a>
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
