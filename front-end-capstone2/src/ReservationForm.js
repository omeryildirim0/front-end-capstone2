// ReservationForm.js

import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';

function ReservationForm() {
  const [reservation, setReservation] = useState({
    name: '',
    date: '',
    time: '',
    partySize: 0
  });

  const handleChange = (e) => {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit reservation details to a server or handle them here
    console.log('Reservation:', reservation);
  };

  const formStyle = {
    backgroundColor: 'yellow', // Adjust the shade of yellow as needed
    padding: '20px',
    borderRadius: '8px'
  };

  const labelStyle = {
    display: 'block',
    margin: '10px 0',
    color: 'black'
  };

  const inputStyle = {
    padding: '10px',
    margin: '5px 0',
    borderRadius: '4px',
    border: '1px solid black'
  };

  const buttonStyle = {
    backgroundColor: 'black',
    color: 'yellow',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  return (
    
    <form onSubmit={handleSubmit} style={formStyle}>
      <label style={labelStyle}>
        Name:
        <input type="text" name="name" value={reservation.name} onChange={handleChange} style={inputStyle}/>
      </label>
      <label style={labelStyle}>
        Date:
        <input type="date" name="date" value={reservation.date} onChange={handleChange} style={inputStyle}/>
      </label>
      <label style={labelStyle}>
        Time:
        <input type="time" name="time" value={reservation.time} onChange={handleChange} style={inputStyle}/>
      </label>
      <label style={labelStyle}>
        Party Size:
        <input type="number" name="partySize" value={reservation.partySize} onChange={handleChange} style={inputStyle}/>
      </label>
      <button type="submit" style={buttonStyle}> Submit Reservation</button>
    </form>
  );
}

export default ReservationForm;
