import React, { useState } from 'react';
import axios from 'axios';
import './login.css'


function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setError('');
  
      if (!username || !password) {
        setError('Please enter both username and password.');
        return;
      }
  
      axios.post('/api/login', {
        username,
        password,
      })
        .then((response) => {
          localStorage.setItem('token', response.data.token);
          // redirect to the dashboard or homepage
        })
        .catch((error) => {
          setError(error.response.data.message);
        });
    };
  
    return (
      <div className="login-page">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          {error && <div className="error">{error}</div>}
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
  
  export default LoginPage;