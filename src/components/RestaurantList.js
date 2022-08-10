import Restaurant from "./Restaurant.js";
import axios from "axios";
import { useState, useEffect } from "react";
import SearchForm from "./SearchForm.js";

const RestaurantList = (props) => {
  const [restaurantsData, setRestaurantsData] = useState([]);

  const [timeChosen, setTimeChosen] = useState([]);
  const [dayChosen, setDay] = useState([]);

  const URL = "http://127.0.0.1:5000";
  const fetchRestaurants = async (cityName, day, timeChosen) => {
    setTimeChosen(timeChosen);
    setDay(day);
    let normalizedDate =
      day.getFullYear().toString() +
      "-" +
      (day.getMonth() + 1).toString() +
      "-" +
      day.getDate().toString() +
      "-" +
      timeChosen.toString();
    const newRests = [];
    let rests = await axios.get(`${URL}/restaurants/${cityName}`, {
        params: {
          date: normalizedDate,
        },
      })
      .then((resp) => {
        return resp.data;
      })
      .catch((err) => {
        alert(err.response.data.details);
      });

    for (let rest of rests) {
      await axios
        .get(`${URL}/yelp/businesses/${rest.yelp_id}`)
        .then((resp) => {
          const newRest = { ...rest, yelp_data: resp.data };
          newRests.push(newRest);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    setRestaurantsData(newRests);
  };

  return (
    <section>
      <SearchForm getRestaurants={fetchRestaurants}></SearchForm>
      <div className="rest-container">
        {restaurantsData.map((item) => (
          <Restaurant
            key={item.id}
            yelp_data={item.yelp_data}
            name={item.name}
            address={item.address}
            location={item.location}
            restaurant_id={item.id}
            slots={item.available_slots}
            timeChosen={timeChosen}
            toggleConfirmPage={props.toggleConfirmPage}
            day={dayChosen}
          />
        ))}
      </div>
    </section>
  );
};

export default RestaurantList;
