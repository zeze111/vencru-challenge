import React from 'react';

export default (props) => (
  <div className="sidebar-div">
    <button
      className={props.linkNo === 1 ? "pressed" : "sidebar-list"}
      onClick={() => props.sideBarLinks(1, "Dashboard")}>
      <i className="fas fa-table sidebar-inner-text"></i>
      <p className="sidebar-inner-text2">Dashboard</p>
    </button>
    <button
      className={props.linkNo === 2 ? "pressed" : "sidebar-list"}
      onClick={() => props.sideBarLinks(2, "Sales")}>
      <i className="fas fa-file-invoice sidebar-inner-text"></i>
      <p className="sidebar-inner-text2">Sales</p>
    </button>
    <button
      className={props.linkNo === 3 ? "pressed" : "sidebar-list"}
      onClick={() => props.sideBarLinks(3, "Expenses")}>
      <i className="far fa-chart-bar sidebar-inner-text"></i>
      <p className="sidebar-inner-text2">Expenses</p>
    </button>
    <button
      className={props.linkNo === 4 ? "pressed" : "sidebar-list"}
      onClick={() => props.sideBarLinks(4, "Items")}>
      <i className="fas fa-shopping-cart sidebar-inner-text"></i>
      <p className="sidebar-inner-text2">Items</p>
    </button>
    <button
      className={props.linkNo === 5 ? "pressed" : "sidebar-list"}
      onClick={() => props.sideBarLinks(5, "Clients")}>
      <i className="fas fa-users sidebar-inner-text"></i>
      <p className="sidebar-inner-text2">Clients</p>
    </button>
    <button
      className={props.linkNo === 6 ? "pressed" : "sidebar-list"}
      onClick={() => props.sideBarLinks(6, "Campaigns")}>
      <i className="fas fa-location-arrow sidebar-inner-text"></i>
      <p className="sidebar-inner-text2">Campaigns</p>
    </button>
    <button
      className={props.linkNo === 7 ? "pressed" : "sidebar-list"}
      onClick={() => props.sideBarLinks(7, "Settings")}>
      <i className="fas fa-cog sidebar-inner-text"></i>
      <p className="sidebar-inner-text2">Settings</p>
    </button>
    <button
      className={props.linkNo === 8 ? "pressed" : "sidebar-list"}
      onClick={() => props.sideBarLinks(8, "Feedback")}>
      <i className="fas fa-comment-dots sidebar-inner-text"></i>
      <p className="sidebar-inner-text2">Feedback</p>
    </button>
  </div>
)
