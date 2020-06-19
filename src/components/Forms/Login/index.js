import React from "react";

import { Button } from "components/Button";
import { Form } from "components/Forms";
import { Input } from "components/Input";

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

  renderInputs = (inputs) =>
    inputs.map(({ labelText, inputType }) => (
      <Input
        label={labelText}
        type={inputType}
        proxy={this.stateProxy}
        key={labelText}
      />
    ));

  render() {
    return (
      <form className={styles.form}>
        {this.renderInputs(this.inputs)}
        <Button />
        <Button buttonClass="plain" label="Register?" type="button" />
      </form>
    );
  }
}
