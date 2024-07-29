import React from 'react';
import { Switch, Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import RegisterUser from './components/RegisterUser.js';
import RegisterResident from './components/RegisterResident.js';
import RegisterManager from './components/RegisterManager.js';
import AddFacility from './components/AddFacility.js';
import BookFacility from './components/BookFacility.js';
import ViewBookings from './components/ViewBookings.js';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/api/users/register" element={<RegisterUser/>} />
        <Route path="/register-resident" element={<RegisterResident/>} />
        <Route path="/register-manager" element={<RegisterManager/>} />
        <Route path="/add-facility" element={<AddFacility/>} />
        <Route path="/book-facility" element={<BookFacility/>} />
        <Route path="/view-bookings" element={<ViewBookings/>} />
      </Routes>
    </div>
  );
}

export default App;
