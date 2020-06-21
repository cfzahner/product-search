import React from "react";

import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

import "./Header.css";

export const Header = () => (
  <header>
    <Logo />
    <Navigation />
  </header>
);
