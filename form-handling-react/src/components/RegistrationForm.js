import React, { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create an empty errors object to store validation messages
    const newErrors = {};
    
    // Check if the username is empty
    if (!username) {
      newErrors.username = 'Username is required.';
    }
    
    // Check if the email is empty
    if (!email) {
      newErrors.email = 'Email is required.';
    }
    
    // Check if the password is empty
    if (!password) {
      newErrors.password = 'Password is required.';
    }
    
    // Update the state with any new errors found
    setErrors(newErrors);

    // If the newErrors object is empty, there were no validation errors
    if (Object.keys(newErrors).length === 0) {
      setMessage('Registration successful!');
      console.log('Form data submitted:', { username, email, password });
    } else {
      setMessage('Please correct the errors and try again.');
    }
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegistrationForm;