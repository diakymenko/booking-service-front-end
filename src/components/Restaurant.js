import React from "react";
import { useState } from "react";
import "../App.css";
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
        <div className="timeslot-btn-container">
          <button className="timeslot-button" key={hours} onClick={togglePopup}>
            {hours}:{minutes}{" "}
          </button>
        </div>
      );
    }
  });

  return (
    <section>
      <div className="restaurant-item">
        <img
          className="restaurant-logo"
          src={props.yelp_data.image_url}
          alt={props.name}
        />
        <p className="rest-name">{props.name}</p>
        <section className="rating-review-container">
          <img
            src={"/images/rating/regular_" + props.yelp_data.rating + ".png"}
            alt={props.yelp_data.rating}
          />
          <div className="review-count">
            {props.yelp_data.review_count} reviews
          </div>
        </section>
        <section className="price-category-city-container">
          <div>{props.yelp_data.categories[0].title}</div>
          <div>•</div>
          <div>{props.yelp_data.price}</div>
          <div>•</div>
          <div>{props.location}</div>
        </section>
        <div className="book-times">
          ☑ Booked {props.reservations_count} times
        </div>
        <div>{displaySlots} </div>
      </div>

      <div className="confirm-form-container">
        {isOpen && (
          <Popup
            day={props.day}
            yelpData={props.yelp_data}
            address={props.address}
            location={props.location}
            restaurant_id={props.restaurant_id}
            time={timeButtonValue}
            name={props.name}
            handleClose={togglePopup}
            getRestaurants={props.getRestaurants}
          />
        )}
      </div>
    </section>
  );
};

export default Restaurant;
