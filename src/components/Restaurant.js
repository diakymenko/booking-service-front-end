import React from 'react';
import BookingConfirm from "./BookingConfirm.js";
import {Routes, Route, useNavigate} from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import { useState } from "react";



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
    <div>
      <h1>{props.name}</h1>
      <h2>{props.address}</h2>
      <div>{props.location}</div>
      <div>{displaySlots} </div>
      {isFormVisible ? (
              <BookingConfirm restaurant_id = {props.restaurant_id} time = {timeButtonValue} name = {props.name}></BookingConfirm>) : (
                ""
              )}
      </div>
  )}
      

export default Restaurant