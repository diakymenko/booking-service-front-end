import React from "react";
import { useState } from "react";
import axios from "axios";

const Popup = (props) => {
  document.body.style.position = "";
  document.body.style.top = "";

  const defaultReservation = {
    firstName: "",
    lastName: "",
    phone: "",
  };

  const [reservation, setReservation] = useState(defaultReservation);
  const [errors, setErrors] = useState({});
  const[invalidField, setinvalidField] = useState()
  

  const validateForm = () => {
    const newErrors = {};
    let isFormValid = true;
    if (!reservation.firstName) {
      newErrors.firstName = "First name is required.";
      isFormValid = false;
    }
    if (!reservation.lastName) {
      newErrors.lastName = "Last name is required.";
      isFormValid = false;
    }
    if (!reservation.email) {
      newErrors.email = "Email is required.";
      isFormValid = false;
    }
    if (!reservation.phone) {
      newErrors.phone = "Phone number is required.";
      isFormValid = false;
    }
    setErrors(newErrors);
    return isFormValid;

  };

  const onFormChange = (event) => {
    const stateName = event.target.name;
    const inputValue = event.target.value;

    const newFormData = { ...reservation };
    newFormData[stateName] = inputValue;

    setReservation(newFormData);
  };

  const URL = "http://127.0.0.1:5000";
  const submitNewReservation = (event) => {
    event.preventDefault();
    
    let isFormValid = true;
    isFormValid = validateForm()

    if (isFormValid) {

    const [time, mins] = props.time.split(":");
    const body = {
      customer_name: reservation.firstName + " " + reservation.lastName,
      timestamp:
        props.day.getFullYear().toString() +
        "-" +
        (props.day.getMonth() + 1).toString() +
        "-" +
        props.day.getDate().toString() +
        "-" +
        time.toString(),
      customer_phone: reservation.phone,
    };
    axios
      .post(`${URL}/restaurants/${props.restaurant_id}/reservations`, body)
      .then((response) => {
        alert(response.data.details);
      })
      .catch((error) => {
        alert(error.response.data.details);
      });
    }
  };

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <form onSubmit={submitNewReservation}>
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
              <p className="address-location">{props.address}</p>
            </div>
          </section>
          <div className="pop-up-label-container">
            <section className="first-name-error-container">
            <label htmlFor="firstName"></label>
            <input
              id="pop-box-first-name"
              placeholder="First name"
              type="text"
              name="firstName"
              value={reservation.firstName}
              onChange={onFormChange}
            ></input>
            <div id = "first-name-error">{errors.firstName}</div>
            </section>
            <section className="last-name-error-container">
            <label htmlFor="lastName"></label>
            <input
              id="pop-box-last-name"
              placeholder="Last name"
              type="text"
              name="lastName"
              value={reservation.lastName}
              onChange={onFormChange}
            ></input>
            <div id = "last-name-error">{errors.lastName}</div>
            </section>
            <section className="phone-error-container">
            <label htmlFor="phone"></label>
            <input
              id="pop-box-phone"
              placeholder="Phone number"
              type="text"
              name="phone"
              value={reservation.phone}
              onChange={onFormChange}
            ></input>
            <div id = "phone-error">{errors.phone}</div>
            </section>

            <section className="email-error-container">

            <label htmlFor="email"></label>
            <input
              id="pop-box-email"
              placeholder="Email"
              type="text"
              name="email"
              onChange={onFormChange}
            ></input>
            <div id = "email-error">{errors.email}</div>
            </section>
          </div>
          <input
            className="popup-submit-btn"
            type="Submit"
            value="Complete reservation"
          ></input>
        </form>
      </div>
    </div>
  );
};
export default Popup;
