import React from 'react';

export default (props) => (
  <div>
    <button className="dropdown-btn">
      <p className="">Notifications</p>
    </button>
    <button className="dropdown-btn">
      <p className="">{props.show}</p>
    </button>
    <button className="dropdown-btn">
      <p className="">Invite</p>
    </button>
    <button className="dropdown-btn">
      <p className="">Profile</p>
    </button>
  </div>
)
