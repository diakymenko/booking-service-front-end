import Restaurant from "./Restaurant.js";
import axios from "axios";
import { useEffect, useState } from "react";
import SearchForm from "./SearchForm.js";


const RestaurantList = (props) => {
    const [restaurantsData, setRestaurantsData] = useState([]);

    const [timeChosen, setTimeChosen] = useState([]);
    const [dayChosen, setDay] = useState([]);


    const URL = "http://127.0.0.1:5000"
    const fetchRestaurants = (cityName, day, timeChosen) => {
      setTimeChosen(timeChosen)
      setDay(day)
      let normalizedDate = day.getFullYear().toString() + "-" +(day.getMonth()+1).toString() + "-" +day.getDate().toString() + "-"+timeChosen.toString()
      axios
        .get(`${URL}/restaurants/${cityName}`, {
          params: {
            date: normalizedDate
          },
        })
        .then((response) => {
          // Response data is a nested JS object

          setRestaurantsData(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
      }
    
    // useEffect(fetchRestaurants, []);

    return (
      <section className="rest-container">
        <SearchForm getRestaurants = {fetchRestaurants}></SearchForm>
        {restaurantsData.map((item) =>
          <Restaurant key={item.id} name={item.name} address={item.address} location = {item.location} restaurant_id = {item.id}
          slots = {item.available_slots} timeChosen={timeChosen} toggleConfirmPage = {props.toggleConfirmPage} day = {dayChosen}
          />
        )}
      </section>
    
    )
    }
  
  



export default RestaurantList;