import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookFacility = () => {
  const [booking, setBooking] = useState({
    facilityId: '',
    residentId: '',
    date: ''
  });
  const [facilities, setFacilities] = useState([]);
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    axios.get('/api/facilities')
      .then((response) => {
        setFacilities(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios.get('/api/residents')
      .then((response) => {
        setResidents(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking((prevBooking) => ({
      ...prevBooking,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/bookings', booking)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Book Facility</h2>
      <form onSubmit={handleSubmit}>
        <label>Facility:</label>
        <select name="facilityId" value={booking.facilityId} onChange={handleChange} required>
          <option value="">Select Facility</option>
          {facilities.map((facility) => (
            <option key={facility.id} value={facility.id}>{facility.name}</option>
          ))}
        </select>
        <label>Resident:</label>
        <select name="residentId" value={booking.residentId} onChange={handleChange} required>
          <option value="">Select Resident</option>
          {residents.map((resident) => (
            <option key={resident.id} value={resident.id}>{resident.name}</option>
          ))}
        </select>
        <label>Date:</label>
        <input type="date" name="date" value={booking.date} onChange={handleChange} required />
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default BookFacility;