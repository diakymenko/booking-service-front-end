import React from 'react';
import SearchForm from './SearchForm';

const Restaurant =(props) => {
  const displaySlots = props.slots.map((item) => {
    const [date, timeSlot] = item.split(' ');
    const [hours, minutes, seconds] = timeSlot.split(':')
    if (hours >= props.timeChosen) {
      console.log(props.timeChosen, hours)
    return (
    <button>{hours}:{minutes}</button>)}
  })
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.address}</h2>
      <div>{displaySlots} </div>
    </div>
  )}

export default Restaurant