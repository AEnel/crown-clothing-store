import React from "react";
import FromInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-buttons.component";

import './sign-in.styles.scss'

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.setState({email: '', password: ''})
  }

  handleChange = (e) => {
    const { value, name} = e.target;

    this.setState( {[name]: value})
  }

  render() {
    return (
    <div className="sign-in">
      <h2>I already have an account </h2>
      <span> Sign in with your email and password </span>

      <form onSubmit={this.handleSubmit}>
        <FromInput
            name="email"
            type= 'email'
            label = 'Email'
            handleChange={this.handleChange}
            value = {this.state.email}
            required
          />

        <FromInput
            name="password"
            type= 'password'
            label = 'Password'
            handleChange={this.handleChange}
            value = {this.state.password}
            required
          />

        <CustomButton type = 'submit' > Sign in </CustomButton>
      </form>
    </div>
    )
  }

}

export default SignIn;