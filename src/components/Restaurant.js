import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import pic from "../test_image.jpeg";
import Popup from "./Popup";

const Restaurant = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeButtonValue, setTimeButtonValue] = useState([]);

  const togglePopup = (event) => {
    setIsOpen(!isOpen);
    setTimeButtonValue(event.target.textContent);
  };

  const displaySlots = props.slots.map((item) => {
    const [date, timeSlot] = item.split(" ");
    const [hours, minutes, seconds] = timeSlot.split(":");
    if (hours >= props.timeChosen) {
      return (
        <button key={hours} onClick={togglePopup}>
          {hours}:{minutes}{" "}
        </button>
      );
    }
  });

  return (
    <section>
      <div className="restaurant-item">
        <img className="restaurant-logo" src={props.yelp_data.image_url} alt={props.name} />
        <p>{props.name}</p>
        <img
          src={"/images/rating/regular_" + props.yelp_data.rating + ".png"}
          alt={props.yelp_data.rating}
        />
        <div>{props.yelp_data.price}</div>
        <div>{props.location}</div>
        <div>{displaySlots} </div>
      </div>

      <div className="confirm-form-container">
        {isOpen && (
          <Popup
            day={props.day}
            address={props.address}
            location={props.location}
            restaurant_id={props.restaurant_id}
            time={timeButtonValue}
            name={props.name}
            handleClose={togglePopup}
          />
        )}
      </div>
    </section>
  );
};

export default Restaurant;
