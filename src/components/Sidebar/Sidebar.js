import React from "react";
import PropTypes from "prop-types";
import { dismissAlert } from "../../actions/alerts";
import s from "./Sidebar.module.scss";
import LinksGroup from "./LinksGroup/LinksGroup";
import {
  changeActiveSidebarItem
} from "../../actions/navigation";
import { logoutUser } from "../../actions/user";

import lightDashboardIcon from "../../images/light-dashboard.svg";
import darkDashboardIcon from "../../images/dark-dashboard.svg";
import lightTables from "../../images/tables.svg";
import darkTables from "../../images/tables-dark.svg";
import lightUI from "../../images/ui-elements.svg";
import darkUI from "../../images/ui-elements-dark.svg";
import lightTypography from "../../images/Typography.svg";
import darkTypography from "../../images/Typography-dark.svg";
import logo from "../../images/logo.svg";
import totalSale from "../../images/total-sale.svg";
import caretActive from '../../images/caret-active.svg'
import settingsIcon from "../../images/settings.svg";
import logoutIcon from "../../images/logout.svg";
import accountIcon from "../../images/account.svg";
import smileImg from "../../images/smileImg.svg";
import { Button } from "reactstrap";
import notify from '../../images/notify.svg'

class Sidebar extends React.Component {
  static propTypes = {
    sidebarStatic: PropTypes.bool,
    sidebarOpened: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
    activeItem: PropTypes.string,
    location: PropTypes.shape({
      pathname: PropTypes.string
    }).isRequired
  };

  static defaultProps = {
    sidebarStatic: true,
    sidebarOpened: true,
    activeItem: ""
  };

  constructor(props) {
    super(props);

    this.doLogout = this.doLogout.bind(this);
  }

  dismissAlert(id) {
    this.props.dispatch(dismissAlert(id));
  }

  doLogout() {
    this.props.dispatch(logoutUser());
  }

  render() {
    return (
        <div className={`${(!this.props.sidebarOpened && !this.props.sidebarStatic ) ? s.sidebarClose : ''} ${s.sidebarWrapper}`} id={"sidebar-drawer"}>
        <nav className={s.root}>
          <header className={s.logo}>
            <span>Moneyvest&nbsp;</span>
          </header>
          <img
                  src={accountIcon}
                  alt="lightDashboard"
                  width={"60px"}
                  height={"60px"}
                  style={{margin: "35px 0 0px 32px"}}
                />
          <h4 style={{margin: "35px 0 0px 32px"}}>Hello <b>Abdul-Qudus</b></h4>
          <p style={{margin: "5px 0 0px 32px"}}>jideabdqudus@gmail.com</p>
          <Button style={{margin: "5px 0 0px 32px", backgroundColor:"#098c8c"}} size="sm">Edit profile </Button>
          <br/>
          <ul className={s.nav}>
          
            <LinksGroup
              onActiveSidebarItemChange={activeItem =>
                this.props.dispatch(changeActiveSidebarItem(activeItem))
              }
              activeItem={this.props.activeItem}
              header="Dashboard"
              isHeader
              link="/dashboard"
              index="main"
            >
              {window.location.href.includes("dashboard") ? (
                <img
                  src={darkDashboardIcon}
                  alt="lightDashboard"
                  width={"24px"}
                  height={"24px"}
                />
              ) : (
                <img
                  src={lightDashboardIcon}
                  alt="lightDashboard"
                  width={"24px"}
                  height={"24px"}
                />
              )}
            </LinksGroup>
            <LinksGroup
              onActiveSidebarItemChange={activeItem =>
                this.props.dispatch(changeActiveSidebarItem(activeItem))
              }
              activeItem={this.props.activeItem}
              header="Transactions"
              isHeader
              link="/dashboard/transaction"
            >
              {window.location.href.includes("dashboard") ? (
                <img
                  src={totalSale}
                  alt="lightDashboard"
                  width={"24px"}
                  height={"24px"}
                />
              ) : (
                <img
                  src={totalSale}
                  alt="lightDashboard"
                  width={"24px"}
                  height={"24px"}
                />
              )}
            </LinksGroup>
            <LinksGroup
            onActiveSidebarItemChange={activeItem =>
              this.props.dispatch(changeActiveSidebarItem(activeItem))
            }
            activeItem={this.props.activeItem}
            header="Notify"
            isHeader
            link="/dashboard/notify"
          >
            {window.location.href.includes("dashboard") ? (
              <img
                src={notify}
                alt="notify"
                width={"24px"}
                height={"24px"}
              />
            ) : (
              <img
                src={notify}
                alt="notify"
                width={"24px"}
                height={"24px"}
              />
            )}
          </LinksGroup>
          </ul>
          <ul className={s.downNav}>
            <hr />
            <LinksGroup
            
            header="Help & Support"
            isHeader
            link="/!"
          >
            {window.location.href.includes("dashboard") ? (
              <img
                src={smileImg}
                alt="smileImg"
                width={"24px"}
                height={"24px"}
              />
            ) : (
              <img
                src={smileImg}
                alt="smileImg"
                width={"24px"}
                height={"24px"}
              />
            )}
          </LinksGroup>
            <LinksGroup
              onActiveSidebarItemChange={activeItem =>
                this.props.dispatch(changeActiveSidebarItem(activeItem))
              }
              header="Logout"
              isHeader
              onClick={() => this.doLogout()}
            >
              {window.location.href.includes("another-page") ? (
                <img
                  src={logoutIcon}
                  alt="lightDashboard"
                  width={"24px"}
                  height={"24px"}
                />
              ) : (
                <img
                  src={logoutIcon}
                  alt="lightDashboard"
                  width={"24px"}
                  height={"24px"}
                />
              )}
            </LinksGroup>
          </ul>
        </nav>
      </div>
    );
  }
}

// function mapStateToProps(store) {
//   return {
//     sidebarOpened: store.navigation.sidebarOpened,
//     sidebarStatic: store.navigation.sidebarStatic,
//     alertsList: store.alerts.alertsList,
//     activeItem: store.navigation.activeItem,
//     navbarType: store.navigation.navbarType,
//   };
// }

export default Sidebar;
