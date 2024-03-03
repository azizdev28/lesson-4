import axios from "axios";
import React, { Component } from "react";
import Loading from "../components/Loading";

export class PostPage extends Component {
  state = {
    posts: null,
    loading: false,
  };
  async getPost() {
    const postId = window.location.pathname.split("/").at(-1);
    try {
      this.setState({ loading: true });
      let { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      this.setState({ post: data });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  }
  componentDidMount() {
    this.getPost();
  }
  render() {
    const { post, loading } = this.state;
    return (
      <div>
        <h1>PostPage </h1>
        {loading ? (
          <Loading />
        ) : (
          <div>
            <h2>{post?.title}</h2>
            <p>{post?.body}</p>
          </div>
        )}
      </div>
    );
  }
}

export default PostPage;
