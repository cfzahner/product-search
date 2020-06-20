import React from "react";

import { Button } from "components/Button";
import { Form } from "../Form";

import styles from "./Login.module.css";

export class Login extends Form {
  state = {
    isLoggedIn: false,
    password: "",
    username: "",
  };

  inputs = [
    {
      inputType: "text",
      labelText: "Username",
    },
    {
      inputType: "password",
      labelText: "Password",
    },
  ];

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.processFormData(e.target, "st"));
  };

  render() {
    // TODO: Add error handling depending on authentication
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        {this.renderInputs(this.inputs)}
        <Button />
        <Button buttonClass="plain" label="Register?" type="button" />
      </form>
    );
  }
}
