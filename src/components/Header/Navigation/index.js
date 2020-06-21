import { NavLink } from "react-router-dom";
import React from "react";

import "./Navigation.css";

const links = ["Home", "Products", "About", "Blog"];

const createLinks = () => {
  return links.map((link) => {
    return (
      <li key={link}>
        <NavLink to={"/" + link.toLowerCase()} activeClassName="isActiveLink">
          {link}
        </NavLink>
      </li>
    );
  });
};

export const Navigation = () => (
  <nav>
    <ul>{createLinks()}</ul>
  </nav>
);
