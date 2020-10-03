import React from "react";
import FormInput from "../formInput/FormInput";
import CustomButton from "../customButton/CustomButton";

import { auth, createUserProfileDoc } from "../../firebase/firebase";

import "./Register.scss";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords dont match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDoc(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="register">
        <h2 className="title">I don't have an account</h2>
        <span>Sign up with email and password</span>

        <form className="register-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            label="Display Name"
            value={displayName}
            onChange={this.handleChange}
            required
          />

          <FormInput
            type="email"
            name="email"
            label="Email"
            value={email}
            onChange={this.handleChange}
            required
          />

          <FormInput
            type="password"
            name="password"
            label="Password"
            value={password}
            onChange={this.handleChange}
            required
          />

          <FormInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            value={confirmPassword}
            onChange={this.handleChange}
            required
          />
          <CustomButton type="submit">Register</CustomButton>
        </form>
      </div>
    );
  }
}

export default Register;
