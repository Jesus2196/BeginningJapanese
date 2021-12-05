import React, { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
  // class field syntax
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // We don't want to send the confirm or error properties
      // Let's make a copy of this.state (we never want to directly modify the state obj)
      const formData = { ...this.state };
      delete formData.error;
      delete formData.confirm;
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      // An error occurred
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  handleChange = (evt) => {
    // Unlike setters in function components,
    // this.setState MERGES the provided object, it does
    // NOT replace it
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  // Must override the render method
  // The render method take the place of a function component
  // That is, it will ultimately return its UI as JSX
  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div id="login">
        <div className="login-container" id="container">
          <div className="login-form-container login-log-in-container">
            <form className="login-form" autoComplete="off" onSubmit={this.handleSubmit}>
              <h1 className="login">Sign Up</h1>
              <input className="login-input" placeholder="Name" type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
              <input className="login-input" placeholder="Email" type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
              <input className="login-input" placeholder="Password" type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
              <input className="login-input" placeholder="Confirm Password" type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
              <button className="login-button" type="submit" disabled={disable}>SIGN UP</button>
            </form>
          </div>
          <div className="login-overlay-container">
            <div className="login-overlay">
              <div className="login-overlay-panel login-overlay-right">
                <h1>Beginning Japanese</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste culpa repellat, voluptate distinctio quos commodi maxime maiores asperiores quaerat, porro in, debitis blanditiis tempora! Veritatis eaque similique minima quaerat quo.</p>
              </div>
            </div>
          </div>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}