import React,{Fragment} from 'react'
import styles from './Sidebar.module.css'
import cx from 'classnames'

const Sidebar = () => {
    return (
        <Fragment >
        <aside className={styles.menuSiderbar2}>
            <div className={styles.logo}>
                <a href="!#">
                    <h1>Finance</h1>
                </a>
            </div>
            <div className={styles.menuSiderbar2Content}>
                <div className={styles.account2}>
                    <h4 className="name">Hello <b>Abdul-Qudus</b></h4>
                    <p className="text-muted">jideabdqudus@gmail.com</p>
                </div>
                <nav className={styles.navbarSidebar2}>
                    <ul className="list-unstyled" style={{paddingLeft:"0", listStyle:"none"}} className={cx(styles.navbarlist, styles.listunstyled)}>
                        <li>
                            <a href="index.html">
                                <i className="fas fa-home"></i>Home</a>
                        </li>
                        <li className={cx(styles.hassub, styles.active)}>
                            <a className="js-arrow" href="!#">
                                <i className="fas fa-tachometer-alt"></i>Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="inbox.html">
                                <i className="fas fa-credit-card"></i>Transactions</a>
                            <span className={styles.inboxNum}>3</span>
                        </li>                        
                    </ul>
                </nav>
            </div>
        </aside>
        </Fragment>
    )
}

export default Sidebar
