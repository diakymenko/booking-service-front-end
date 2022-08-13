import React from "react";
import "../App.css";

const ReservationConfirmation = (props) => {
  return (
    <section>
      <div>
      {props.success === true ? <div id = "check-sign">✔</div> : <div id = "error-sign">✘</div> } </div>
      <div>{props.success === true ? <div id = "thanks-msg">Thank you!</div> : <div id = "sorry-msg">We are sorry!</div>}
      </div>
      <div>{props.success === true ? <div id = "reservation-msg">Your reservation is confirmed!</div> : <div id = "fail-reservation-msg">{props.message}</div>}</div>
      <div>{props.success === true ? <button onClick={props.handleClose}id="success-ok-btn">OK</button> : <button onClick={props.handleClose}id="fail-ok-btn">OK</button> }</div>
    </section>
  )
};

export default ReservationConfirmation;
