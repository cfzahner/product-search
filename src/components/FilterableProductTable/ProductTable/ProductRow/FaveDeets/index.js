import PropTypes from "prop-types";
import React from "react";

import { Button } from "components/Button";

import styles from "./FaveDeets.module.css";

export class FaveDeets extends React.Component {
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
    const heartSpan = !this.state.isFaved ? (
      <Button buttonClass="plain" buttonText="💛" onClick={this.handleFaved} />
    ) : (
      <Button buttonClass="plain" buttonText="💚" onClick={this.handleFaved} />
    );

    return (
      <div className={styles.container}>
        <Button buttonClass="plain" buttonText="View Deets" type="button" />
        {heartSpan}
      </div>
    );
  }
}
