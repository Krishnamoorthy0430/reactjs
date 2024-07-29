import React, { useState } from 'react';
import axios from 'axios';

const RegisterResident = () => {
  const [resident, setResident] = useState({
    name: '',
    apartmentNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResident((prevResident) => ({
      ...prevResident,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/residents/register', resident)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Register Resident</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={resident.name} onChange={handleChange} required />
        <label>Apartment Number:</label>
        <input type="text" name="apartmentNumber" value={resident.apartmentNumber} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterResident;
