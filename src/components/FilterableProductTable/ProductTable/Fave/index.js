import React from "react";

import "./Fave.css";

export class Fave extends React.Component {
  state = {
    isFaved: false,
  };

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
