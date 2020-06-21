import PropTypes from "prop-types";
import React from "react";

import "./Fave.css";

export class Fave extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
  };

  state = {
    isFaved: false,
  };

  // Send back after state has been updated
  componentDidUpdate() {
    this.props.onClick(this.state.isFaved);
  }

  handleFaved = () => {
    this.setState({ isFaved: !this.state.isFaved });
  };

  render() {
    if (!this.state.isFaved) {
      return (
        <span role="img" aria-label="yellow heart" onClick={this.handleFaved}>
          💛
        </span>
      );
    }

    return (
      <span role="img" aria-label="green heart" onClick={this.handleFaved}>
        💚
      </span>
    );
  }
}
