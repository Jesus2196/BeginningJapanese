import React, { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
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
      const formData = { ...this.state };
      delete formData.error;
      delete formData.confirm;
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

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
              <button className="login-button button-4" type="submit" disabled={disable}>SIGN UP</button>
            </form>
          </div>
          <div className="login-overlay-container">
            <div className="login-overlay">
              <div className="login-overlay-panel login-overlay-right">
                <h1>Beginning Japanese</h1>
                <p>We all have to start somewhere, why not beginning your learning career with the basic japanese character set, and hand selected common words.</p>
              </div>
            </div>
          </div>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}