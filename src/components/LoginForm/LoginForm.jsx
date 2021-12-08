import { useState } from 'react';
import './LoginForm.css';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div id="login">
      <div className="login-container" id="container" onSubmit={handleSubmit}>
        <div className="login-form-container login-log-in-container">
          <form className="login-form" autoComplete="off" >
            <h1 className="login">Login</h1>
            <input className="login-input" type="email" name="email" value={credentials.email} onChange={handleChange} placeholder="Email" required />
            <input className="login-input" type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password" required />
            <button className="login-button button-4" type="submit">LOG IN</button>
          </form>
        </div>
        <div className="login-overlay-container">
          <div className="login-overlay">
            <div className="login-overlay-panel login-overlay-right">
              <h1>Beginning Japanese</h1>
              <p>Welcome back! Continue reviewing some of the common words and Japanese character sets</p>
            </div>
          </div>
        </div>
      </div>
      <p>&nbsp;{error}</p>
    </div>

  );
}