import React, { useState } from 'react';
import axios from 'axios';

const AddFacility = () => {
  const [facility, setFacility] = useState({
    name: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFacility((prevFacility) => ({
      ...prevFacility,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/facilities', facility)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Add Facility</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={facility.name} onChange={handleChange} required />
        <label>Description:</label>
        <input type="text" name="description" value={facility.description} onChange={handleChange} required />
        <button type="submit">Add Facility</button>
      </form>
    </div>
  );
};

export default AddFacility;
