import React from "react";

import { Button } from "components/Button";
import { Form } from "../Form";

import styles from "./Login.module.css";

export class Login extends Form {
  state = {
    buttonTexts: ["Login", "Register"],
    inputs: [
      {
        inputType: "text",
        labelText: "Username",
      },
      {
        inputType: "password",
        labelText: "Password",
      },
    ],
    isLoggedIn: false,
    password: "",
    username: "",
  };

  registrationInputs = [
    {
      inputType: "text",
      labelText: "Name",
    },
    {
      inputType: "email",
      labelText: "Email",
    },
  ];

  handleRegistration = () => {
    const currentInputs = this.state.inputs;

    // 'length' determines whether registrationInputs included or not
    this.setState({
      buttonTexts: [...this.state.buttonTexts].reverse(),
      inputs:
        currentInputs.length > 2
          ? currentInputs.slice(0, 2)
          : currentInputs.concat(this.registrationInputs),
    });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        {this.renderInputs(this.state.inputs)}
        <Button buttonText={this.state.buttonTexts[0]} />
        <Button
          buttonClass="plain"
          buttonText={this.state.buttonTexts[1]}
          label="Register?"
          type="button"
          onClick={this.handleRegistration}
        />
      </form>
    );
  }
}
