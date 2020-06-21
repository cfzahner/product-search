import { NavLink } from "react-router-dom";
import React from "react";

import kebabcase from "lodash.kebabcase";

import "./Navigation.css";

const links = ["Home", "About Us", "Blog"];

const createLinks = () => {
  return links.map((link) => {
    return (
      <li key={link}>
        <NavLink to={"/" + kebabcase(link)}>{link}</NavLink>
      </li>
    );
  });
};

export const Navigation = () => (
  <nav>
    <ul>{createLinks()}</ul>
  </nav>
);
