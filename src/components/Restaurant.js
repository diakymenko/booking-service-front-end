import React from 'react';
import BookingConfirm from "./BookingConfirm.js";
import { useState } from "react";
import "../App.css";
import pic from "../test_image.jpeg";



const Restaurant =(props) => {

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [timeButtonValue, setTimeButtonValue] = useState([]);
  
  const toggleConfirmPage = (event) => {
  
    setTimeButtonValue(event.target.textContent);
    setIsFormVisible(!isFormVisible);}
  
  const displaySlots = props.slots.map((item) => {
  
    const [date, timeSlot] = item.split(' ');
    const [hours, minutes, seconds] = timeSlot.split(':')
    if (hours >= props.timeChosen) {
    return (
      <button onClick={toggleConfirmPage}>{hours}:{minutes} </button> 
    )
  }
  })
  return (
<section>
    <div className='restaurant-item'>
      <img src={pic} alt="fffff"/>
      <p>{props.name}</p>
      <p>stars, avr review</p>
      <p>Cuisine</p>
      {/* <p>{props.address}</p> */}
      <div>{props.location}</div>
      <div>{displaySlots} </div>
      </div>


      <div className = "confirm-form-container">
      {isFormVisible ? (
              <BookingConfirm day = {props.day} address = {props.address} location = {props.location} restaurant_id = {props.restaurant_id} time = {timeButtonValue} name = {props.name}></BookingConfirm>) : (
                ""
              )}
        
        </div>
              </section>
  )}
      

export default Restaurant;