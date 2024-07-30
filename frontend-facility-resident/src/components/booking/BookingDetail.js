// src/components/BookingDetails.js
import React, { useState } from 'react';
import BookingService from '../../services/BookingService';

const BookingDetail = () => {
    const [bookingId, setBookingId] = useState('');
    const [bookingDetails, setBookingDetails] = useState(null);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleFetchDetails = async () => {
        try {
            const response = await BookingService.fnGetBookingById(bookingId);
            setBookingDetails(response.data); // Assuming response.data contains booking details
            setError('');
        } catch (err) {
            setError('Error fetching booking details');
            setBookingDetails(null);
        }
    };

    const inputClassName = "form-control mb-3";

    return (
            <div>
            <h2>Get Booking Details</h2>
            <input
                type="text"
                className={inputClassName}
                value={bookingId}
                onChange={(e) => setBookingId(e.target.value)}
                placeholder="Enter Booking ID"
            />
            <br /><br />
            <input
                type="button"
                className="btn-fetch-details"
                value="Get Booking Detail"
                onClick={handleFetchDetails}
            />
            {error && (
                    <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #dc3545', borderRadius: '4px', backgroundColor: '#f8d7da', color: '#721c24' }}>
                        <h2>Error</h2>
                        <pre>{error}</pre>
                    </div>
                )}
                
                {message && (
                    <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #28a745', borderRadius: '4px', backgroundColor: '#d4edda', color: '#155724' }}>
                        <h2>Success</h2>
                        <pre>{message}</pre>
                    </div>
                )}
                
            {bookingDetails && (
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Booking ID</th>
                            <th>Booking Date</th>
                            <th>Facility ID</th>
                            <th>Resident ID</th>
                            <th>Event Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{bookingDetails.id}</td>
                            <td>{new Date(bookingDetails.bookingDate).toLocaleString()}</td>
                            <td>{bookingDetails.facilityId}</td>
                            <td>{bookingDetails.residentId}</td>
                            <td>{new Date(bookingDetails.eventDate).toLocaleString()}</td>
                            <td>{bookingDetails.status}</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default BookingDetail;
