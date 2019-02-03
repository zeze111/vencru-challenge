import React, { Component } from 'react';

import Sidebar from './Sidebar';
import MobileNav from './MobileNav';
import profile from '../../assets/images/profile.jpeg';

class NavBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sideBar: "hidden",
      dropdown: "hidden",
      title: "Feedback"
    }
  }


  menuBtn = () => {
    const css = (this.state.sideBar === "hidden") ? "sidebar-content" : "hidden";
    const active = (this.props.activeMenu === "main-content") ? "main-content2" : "main-content";
    this.setState({ sideBar: css });
    this.props.setActiveMenu(active);
  }

  dropdownBtn = () => {
    const css = (this.state.dropdown === "hidden") ? "dropdown-content" : "hidden";
    this.setState({ dropdown: css });
  }

  sideBarLinks = (linkNo, title) => {
    this.setState({ linkNo, title });
  }

  render() {
    const show = `${"Create New Feedback".substring(0, 10)}...`;

    return (
      <div>
        <header>
          <ul className="nav">
            <li className="nav-link">
              <button
                className="nav-list"
                onClick={this.menuBtn}>
                <i className="fas fa-bars"></i> </button>
              <div className={this.state.sideBar}>
                <Sidebar
                  sideBarLinks={this.sideBarLinks}
                  linkNo={this.state.linkNo}
                />
              </div>
            </li>
            <li className="nav-link">
              <button className="nav-feedback" disabled>
                {this.state.title} </button>
            </li>
            <li className="nav-link2">
              <button
                className="nav-profile"
                onClick={this.dropdownBtn}>
                <div className="profile-text">
                  <div className="profile-text1">
                    Osaze Edo-Osagie
            </div>
                  <div className="profile-text2">
                    Wanted Creative Agency
            </div>
                </div>
                <img
                  className="img1"
                  src={profile}
                  alt="Smiley face"></img>
                <i className="fas fa-caret-down img-icon"></i>
              </button>
              <div className={this.state.dropdown}>
                <MobileNav show={show} />
              </div>
            </li>
            <li className="nav-link2">
              <button className="nav-notifications">
                <i className="fas fa-bell"></i>
                <i className="fas fa-circle inner-text3"></i>
              </button>
            </li>
            <li className="nav-link2">
              <button className="nav-create"> {show}
                <i className="fas fa-angle-down inner-text2"></i>
              </button>
            </li>
            <li className="nav-link2">
              <button className="nav-invite">
                <i className="fas fa-location-arrow inner-text"></i>
                Invite
          </button>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

export default NavBar;
