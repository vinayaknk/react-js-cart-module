import React, { Component } from "react";

// class NavBar extends Component {
//   render() {
const NavBar = ({ totalCounts }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="" className="navbar-brand mb-0 h1">
        Cart :
        <span className="badge badge-pill badge-secondary">{totalCounts}</span>
      </a>
    </nav>
  );
};

export default NavBar;
