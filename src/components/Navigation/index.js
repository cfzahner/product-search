import React from "react";

import kebabcase from "lodash.kebabcase";

import "./Navigation.css";

export class Navigation extends React.Component {
  links = ["Home", "About Us", "Contact", "Blog", "Gallery"];

  createLinks = () => {
    return this.links.map((link, index) => {
      return (
        <li key={index}>
          {/* TODO: Use React Router to route to the correct 'page'/view */}
          <a href={kebabcase(link.toLowerCase())}>{link}</a>
        </li>
      );
    });
  };

  render() {
    return (
      <nav className="Navigation">
        <ul>{this.createLinks()}</ul>
      </nav>
    );
  }
}
