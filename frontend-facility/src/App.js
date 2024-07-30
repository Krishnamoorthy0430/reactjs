import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BookingForm from './components/booking/BookingForm';
import BookingGrid from './components/booking/BookingGrid';
import HomePageDashboard from './components/dashboard/HomePageDashboard';
import FacilityForm from './components/facility/FacilityForm';
import FacilityGrid from './components/facility/FacilityGrid';
import LoginPage from './components/login/LoginPage';
import ManagerRegistrationForm from './components/manager/ManagerRegistrationForm';
import ResidentGrid from './components/Resident/ResidentGrid';
import ResidentRegistrationForm from './components/Resident/ResidentRegistrationForm';

function App() {

  return (
        <Routes>
          <Route path="/" Component={HomePageDashboard} />
          <Route path= "/login" Component={LoginPage} />
          <Route path="/register-manager" Component={ManagerRegistrationForm} />
          <Route path="/register-resident" Component={ResidentRegistrationForm} />
          <Route path="/approve-resident" Component={ResidentGrid} />
          <Route path="/create-facility" Component={FacilityForm} />
          <Route path="/viewfacility" Component={FacilityGrid} />
          <Route path="/viewresident" Component={ResidentGrid} />
          <Route path="/book" Component={BookingForm} />
          <Route path="/viewbookings" Component={BookingGrid} />
          <Route path="/register-resident" Component={ResidentRegistrationForm} />
        </Routes>
  );
}

export default App;
