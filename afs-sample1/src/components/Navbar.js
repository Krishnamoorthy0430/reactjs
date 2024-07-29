import React from 'react';
import { Link } from 'react-router-dom';
import RegisterUser from './RegisterUser';

const Navbar = () => {
  return (
    <div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/api/users/register">Register User</Link></li>
        <li><Link to="/register-resident">Register Resident</Link></li>
        <li><Link to="/register-manager">Register Manager</Link></li>
        <li><Link to="/add-facility">Add Facility</Link></li>
        <li><Link to="/book-facility">Book Facility</Link></li>
        <li><Link to="/view-bookings">View Bookings</Link></li>
      </ul>
    </nav>
  </div>
  );
}

export default Navbar;
