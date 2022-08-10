import React from 'react';
import { useState } from "react";
import axios from "axios";




const Popup =(props) => {

  
  const defaultReservation = {
    firstName: '',
    lastName: '',
    phone: '',
  };


  const [reservation, setReservation] = useState(defaultReservation);
  
  const onFormChange = (event) => {
    const stateName = event.target.name;
    const inputValue = event.target.value;
  
    const newFormData = {...reservation};
    newFormData[stateName] = inputValue;
  
    setReservation(newFormData)
  }

  const URL = "http://127.0.0.1:5000"

  const submitNewReservation = (event) => {
    event.preventDefault();
    const [time, mins] = props.time.split(':') 
    const body = {
      customer_name: reservation.firstName + " " + reservation.lastName,
      timestamp: props.day.getFullYear().toString() + "-" +(props.day.getMonth()+1).toString() + "-" +props.day.getDate().toString() + "-"+time.toString(),
      customer_phone: reservation.phone
    }
    axios
      .post(`${URL}/restaurants/${props.restaurant_id}/reservations`, body)
      .then((response) => {
        alert(response.data.details)
      })
      .catch((error) => {
        alert(error.response.data.details)
      });
};

  
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <form onSubmit={submitNewReservation}>
          <p>Reservation for {props.name} at {props.time} with #id {props.restaurant_id}</p>
          <p>{props.address}, {props.location}</p>
            <label htmlFor="firstName">First name</label>
            <input type="text" name="firstName" value={reservation.firstName} onChange={onFormChange}></input>
            <br></br>
            <label htmlFor="lastName">Last name</label>
            <input type="text" name="lastName" value={reservation.lastName} onChange={onFormChange}></input>
            <br></br>
            <label htmlFor="phone">Phone number</label>
            <input type="text" name="phone" value={reservation.phone} onChange={onFormChange}></input>
      
            <input type="Submit"></input>
        </form>
      </div>
    </div>
    )
  }
  export default Popup;