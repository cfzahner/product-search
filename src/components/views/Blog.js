import React from "react";

import { makeRequest } from "api";

export class Blog extends React.Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    try {
      this.setState({
        posts: await makeRequest("https://jsonplaceholder.typicode.com/posts"),
      });
    } catch (error) {
      console.error(error);
    }
  }

  renderPosts = () =>
    this.state.posts.map(({ title, body }, index) => (
      <section key={index}>
        <h2>{title}</h2>
        <p>{body}</p>
      </section>
    ));

  render() {
    return (
      <main>
        <h1>Blog</h1>
        {this.renderPosts()}
      </main>
    );
  }
}
