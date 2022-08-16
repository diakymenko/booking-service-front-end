import React, { useState } from "react";
import ReservationConfirmation from "./ReservationConfirmation";
import ReservationInput from "./ReservationInput";

const Popup = (props) => {
  const [showInput, setShowInput] = useState(true);
  const [bookingResult, setBookingResult] = useState({});

  const handleBooking = (isSuccess, msg) => {
    console.log(isSuccess);
    setBookingResult({ success: isSuccess, message: msg });
    setShowInput(false);
  };

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <section className="img-reservation-data-container">
          <img
            className="pop-up-rest-img"
            src={props.yelpData.image_url}
            alt={props.name}
          />
          <div className="reservation-address-container">
            <p className="reservation-data">
              <div id="rest-name">{props.name} </div>
              <div id="rest-date">{props.day.toDateString()} </div>
              <div id="rest-time">{props.time}</div>
            </p>
            <p className="address-location">📍 {props.address}</p>
          </div>
        </section>
        {showInput && (
          <ReservationInput
            restaurant_id={props.restaurant_id}
            day={props.day}
            time={props.time}
            handler={handleBooking}
            getRestaurants={props.getRestaurants}
          ></ReservationInput>
        )}
        {!showInput && (
          <ReservationConfirmation
            handleClose={props.handleClose}
            success={bookingResult.success}
            message={bookingResult.message}
          />
        )}
      </div>
    </div>
  );
};
export default Popup;
