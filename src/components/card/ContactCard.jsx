import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ContactCard extends Component {
  render() {
    console.log(this.props);
    const { name, id, email, address } = this.props;
    return (
      <div>
        <Link to={`/contact/${id}`}>
          {" "}
          {id}.{name}
        </Link>
        <p>{email}</p>
        {/* <Link>{address}</Link> */}
      </div>
    );
  }
}

export default ContactCard;
