import React from "react";

import { Button } from "components/Button";
import { Input } from "../Input";

import styles from "./Login.module.css";

export class Login extends React.Component {
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

  handleChange = (event) => {
    this.setState({
      // Use the 🐫Cased id of the input along with either the truthy value or 'checked'
      [event.target.dataset.st]: event.target.value || event.target.checked,
    });
  };

  renderInputs = (inputs) =>
    inputs.map(({ labelText, inputType }) => (
      <Input
        label={labelText}
        type={inputType}
        key={labelText}
        handleChange={this.handleChange.bind(this)}
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
