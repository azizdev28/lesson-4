import axios from "axios";
import React, { Component } from "react";
import { toast } from "react-toastify";

export class ContactInfo extends Component {
  state = {
    user: null,
    loading: false,
  };
  async getInfo() {
    let userId = window.location.pathname.split("/").at(-1);
    try {
      this.setState({ loading: true });
      let { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      this.setState({ user: data });
    } catch (error) {
      toast.error("Error ");
    } finally {
      this.setState({ loading: false });
    }
  }
  componentDidMount() {
    this.getInfo();
  }
  render() {
    const { user } = this.state;
    return (
      <div>
        ContactInfo
        <h2>{user?.username}</h2>
        <p>{user?.address.street}</p>
      </div>
    );
  }
}

export default ContactInfo;
