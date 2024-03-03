import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ContactCard from "../components/card/ContactCard";

export class ContactPage extends Component {
  state = {
    users: [],
    loading: false,
  };

  async getUsers() {
    try {
      this.setState({ loading: true });
      let { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      this.setState({ users: data });
      toast.success("Add users");
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  }
  componentDidMount() {
    this.getUsers();
  }
  render() {
    const { users, loading } = this.state;

    return (
      <div>
        {users.map((user) => (
          <ContactCard key={user.id} {...user} />
        ))}
      </div>
    );
  }
}

export default ContactPage;
