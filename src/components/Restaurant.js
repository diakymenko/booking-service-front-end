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

    <div className='restaurant-item'>
      <h1>{props.name}</h1>
      <img src={pic} alt="fffff"/>
      <p>{props.address}</p>
      <div>{props.location}</div>
      <p>Ratings</p>
      <div>{displaySlots} </div>
      {isFormVisible ? (
              <BookingConfirm day = {props.day} location = {props.location} restaurant_id = {props.restaurant_id} time = {timeButtonValue} name = {props.name}></BookingConfirm>) : (
                ""
              )}
              </div>
  
  )}
      

export default Restaurant;