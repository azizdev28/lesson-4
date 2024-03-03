import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div>
        <nav className="conatiner p-4">
          <ul className="d-flex  justify-content-between">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="about">About</NavLink>
            </li>
            <li>
              <NavLink to="contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="services">Services</NavLink>
            </li>
            <li>
              <NavLink to="portfolios">Portfolio</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
