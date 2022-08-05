import Restaurant from "./Restaurant.js";
import axios from "axios";
import { useEffect, useState } from "react";
import SearchForm from "./SearchForm.js";

const RestaurantList = (props) => {
    const [restaurantsData, setRestaurantsData] = useState([]);

    const [timeChosen, setTimeChosen] = useState([]);


    const URL = "http://127.0.0.1:5000"
    const fetchRestaurants = (cityName, day, timeChosen) => {
      setTimeChosen(timeChosen)
      let normalizedDate = day.getFullYear().toString() + "-" +(day.getMonth()+1).toString() + "-" +day.getDate().toString() + "-"+timeChosen.toString()
      axios
        .get(`${URL}/restaurants/${cityName}`, {
          params: {
            date: normalizedDate
          },
        })
        .then((response) => {
          console.log(response.data);
          console.log("We are in .then");
          // Response data is a nested JS object

          setRestaurantsData(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
      }
    
    // useEffect(fetchRestaurants, []);

    return (
      <section>
        <SearchForm getRestaurants = {fetchRestaurants}></SearchForm>
        {restaurantsData.map((item) => 
          <Restaurant key={item.id} name={item.name} address={item.address}
          slots = {item.available_slots} timeChosen={timeChosen}
          />
        )}
      </section>
    )
    }
  
  



export default RestaurantList;