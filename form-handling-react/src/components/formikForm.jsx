// src/components/RegistrationForm.jsx
import React, { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create an empty errors object
    const newErrors = {};
    
    // Check if the username field is empty
    if (!username) {
      newErrors.username = 'Username is required.';
    }
    
    // Check if the email field is empty
    if (!email) {
      newErrors.email = 'Email is required.';
    }
    
    // Check if the password field is empty
    if (!password) {
      newErrors.password = 'Password is required.';
    }
    
    // Set the new errors object in state
    setErrors(newErrors);

    // If there are no errors, proceed with form submission logic
    if (Object.keys(newErrors).length === 0) {
      setMessage('Registration successful!');
      console.log('Form data submitted:', { username, email, password });
      // You can add logic to clear the form here if needed
    } else {
      // If there are errors, display a general message
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