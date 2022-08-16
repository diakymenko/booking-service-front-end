import { useState, useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import DateTimePicker from "react-datetime-picker";
import "../App.css";
import axios from "axios";

const SearchForm = (props) => {
  const [cityName, setCityName] = useState("");
  const [myDate, setDate] = useState(new Date());
  const [errors, setErrors] = useState({});
  const [errorVisible, setErrorVisible] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    let isFormValid = true;
    if (!cityName) {
      newErrors.cityName = "City name is required!";
      isFormValid = false;
      setErrorVisible(true);
    }
    setErrors(newErrors);
    return isFormValid;
  };

  const URL = "http://35.88.133.158:8080";
  const getLocation = (event) => {
    setErrorVisible(false);
    axios
      .get(`${URL}`)
      .then((response) => {
        const chosenCity = response.data["city"];
        setCityName(chosenCity);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let currentdate = new Date();

  let currentTime = (currentdate.getHours() + 1).toString();
  if (currentdate.getHours() + 1 > 21 || currentdate.getHours() + 1 < 10) {
    currentTime = 10;
  }
  const [timeChosen, setTimeChosen] = useState(currentTime);

  const renameCity = (changeEvent) => {
    setErrorVisible(false);
    setCityName(changeEvent.target.value);
  };

  const chooseTime = (event) => {
    setTimeChosen(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      props.getRestaurants(cityName, myDate, timeChosen);
    }
  };

  return (
    <div>
      <div className="search-bar-wrapper">
        <h1>Delicious starts here</h1>
        <div className="search-bar-container">
          <form name="myform" noValidate onSubmit={handleSubmit}>
            <section className="search-bar-elems">
              <DateTimePicker
                id="datetime"
                className="react-calendar"
                type="button"
                clearIcon={null}
                format="yyyy-MM-dd"
                value={myDate}
                minDate={new Date()}
                selected={myDate}
                onChange={(myDate) => setDate(myDate)}
                shouldCloseOnSelect={false}
              />
            </section>
            <section className="search-bar-elems">
              <select
                className="select-time"
                onChange={chooseTime}
                type="button"
                defaultValue={timeChosen}
              >
                <option value="10">10:00</option>
                <option value="11">11:00</option>
                <option value="12">12:00</option>
                <option value="13">13:00</option>
                <option value="14">14:00</option>
                <option value="15">15:00</option>
                <option value="16">16:00</option>
                <option value="17">17:00</option>
                <option value="18">18:00</option>
                <option value="19">19:00</option>
                <option value="20">20:00</option>
                <option value="21">21:00</option>
              </select>
            </section>
            <section className="search-bar-elems">
              <input
                className="city-name"
                type="text"
                value={cityName}
                onChange={renameCity}
                placeholder="City name..."
              />
              <div>
                {" "}
                {errorVisible === true ? (
                  <div id="city-name-error">{errors.cityName}</div>
                ) : (
                  ""
                )}
              </div>
            </section>
            <section className="search-bar-elems">
              <input id="btn-go" type="submit" value="Let's go" />
            </section>
          </form>
          <div className="location_container">
            <img
              src="https://cdn.otstatic.com/cfe/9/images/ic_location_detection_red-360adb.svg"
              alt="arrow"
            ></img>
            <button id="location_button" onClick={getLocation}>
              Get curent location
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
