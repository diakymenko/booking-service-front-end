import React from 'react';
import { useState } from "react";


const BookingConfirm =(props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [timestamp, setTimeStamp] = useState('');

  const handleFirstNameChange = (event) => {setFirstName(event.target.value)};
  const handleLastNameChange = (event) => {setLastName(event.target.value)};
  const handlePhoneChange = (event) => {setPhone(event.target.value)};


  const submitNewReservation = (event) => {
    event.preventDefault();
    props.createNewReservation(firstName, lastName, phone, props.timeChosen, props.restaurant_id);
    // setTitle('');
    // setOwner('');
    if (firstName.length === 0 || lastName.length === 0) {
        alert('Please enter your first and last name!')
    }

};
  
  return (
    <form onSubmit={submitNewReservation}>
      <p>Reservation for {props.name} at {props.time} with #id {props.restaurant_id}</p>
        <label htmlFor="firstName">First name</label>
        <input 
        type="text" 
        name="firstName" 
        value={firstName} 
        onChange={handleFirstNameChange}></input>
        <br></br>
        <label htmlFor="lastName">Last name</label>
        <input 
        type="text" 
        name="lastName" 
        value={lastName} 
        onChange={handleLastNameChange}></input>
        <br></br>
        <label htmlFor="phone">Phone number</label>
        <input 
        type="text" 
        name="phone" 
        value={phone} 
        onChange={handlePhoneChange}></input>
  
        <input type="Submit"></input>
    </form>
    )}
  

  export default BookingConfirm;