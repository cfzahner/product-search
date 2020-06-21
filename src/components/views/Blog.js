import React, { Fragment } from "react";

import { getData } from "api";

export class Blog extends React.Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    try {
      this.setState({
        posts: await getData("https://jsonplaceholder.typicode.com/posts"),
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
      <Fragment>
        <h1>Blog</h1>
        {this.renderPosts()}
      </Fragment>
    );
  }
}
