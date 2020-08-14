import React, { Fragment } from 'react'
import styles from './sign.module.css'
import {Container, FormGroup} from 'reactstrap'
import cx from 'classnames'

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
                                    <input className={cx(styles.auInput, styles.auInputFull)} id="password" type="email" name="email" placeholder="Email"/>
                                </FormGroup>
                                <FormGroup>
                                <label for="password">Password</label>
                                    <input className={cx(styles.auInput, styles.auInputFull)} id="password" type="password" name="password" placeholder="Password"/>
                                </FormGroup>
                                    <button style={{marginBottom:"20px"}} className={cx(styles.auBtn, styles.auBtnBlock, styles.auBtnGreen)} type="submit">sign in</button>
                                
                            </form>
                            <div className={styles.registerLink}>
                                <p>
                                    User & Password: 
                                    <a href="!#">{" "}guest</a>
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
