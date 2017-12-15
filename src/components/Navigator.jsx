import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigator extends Component {
  render() {
    return (
      <nav className="Navigator navbar is-primary">
        <div className="navbar-brand">
          <NavLink
            exact
            to="/"
            className="navbar-item"
            activeClassName="is-active"
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/form"
            className="navbar-item"
            activeClassName="is-active"
          >
            Form
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default Navigator;
