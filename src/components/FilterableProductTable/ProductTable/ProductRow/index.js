import PropTypes from "prop-types";
import React from "react";

import { FaveDeets } from "./FaveDeets";

export class ProductRow extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  };

  handleClick = (isFaved) => {
    console.log(this.props.id, isFaved);
    // TODO: Update 'faves' over in mongo for this user by making PUT request from front-end API
  };

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.price}</td>
        <td className="fave">
          <FaveDeets onClick={this.handleClick} />
        </td>
      </tr>
    );
  }
}
