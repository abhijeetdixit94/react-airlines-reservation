import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  componentWillMount() {
    if (!localStorage.getItem("user")) {
      this.props.history.replace("/login");
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="" id="navbarNav">
          <span className="navbar-brand">
            Airlines
          </span>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink to="/home" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/bookings" className="nav-link">
                Booking
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/logout" className="nav-link">
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
