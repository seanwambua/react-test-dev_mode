///Stateless Functional Components shortcut 'sfc'
import React from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand mb-0 h1">Dev_Mode</span>
      <span className="badge badge-pill badge-secondary">
        Items: {totalCounters}
      </span>
    </nav>
  );
};

export default NavBar;
