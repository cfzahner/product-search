import React from "react";

import "./Navigation.css";

import kebabcase from "lodash.kebabcase";

const links = ["Home", "About Us", "Blog"];

const createLinks = () => {
  return links.map((link) => {
    return (
      <li key={link}>
        <a href={kebabcase(link)}>{link}</a>
      </li>
    );
  });
};

export const Navigation = () => (
  <nav>
    <ul>{createLinks()}</ul>
  </nav>
);
