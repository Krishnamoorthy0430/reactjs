import React, { useState } from 'react';
import axios from 'axios';

const RegisterManager = () => {
  const [manager, setManager] = useState({
    name: '',
    department: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setManager((prevManager) => ({
      ...prevManager,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/managers/register', manager)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Register Manager</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={manager.name} onChange={handleChange} required />
        <label>Department:</label>
        <input type="text" name="department" value={manager.department} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterManager;
