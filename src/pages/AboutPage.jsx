import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class AboutPage extends Component {
  render() {
    return (
      <div>
        <h1>AboutPage</h1>

        <ul>
          <li>
            <NavLink to="partners">PartNers</NavLink>
          </li>
          <li>
            <NavLink to="team">Team</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default AboutPage;
