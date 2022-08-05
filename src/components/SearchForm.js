import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Restaurant from './Restaurant';



const SearchForm = (props) => {
    const [cityName, setCityName] = useState('Seattle');
    const [date, setDate] = useState(new Date());

    let currentdate = new Date(); 
    let time = (currentdate.getHours()+1).toString()
    if (time < 10 || time > 21) {
      time = 10;
    }

    const [timeChosen, setTimeChosen] = useState(time);


    const renameCity = (changeEvent) => {
      setCityName(changeEvent.target.value);
    };

    const chooseTime = (event) => {
      setTimeChosen(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      props.getRestaurants(cityName, date, timeChosen)
    }
  
  

  return (<div>
    <form onSubmit = {handleSubmit}>
        <Calendar onChange={setDate} value={date} />
      <p>
        <span>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
      <div>
          <label> Reservation Time </label>
          <select className="options" onChange={chooseTime}
          defaultValue={timeChosen}>
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
        </div>
        <section>
            <h2>{cityName}</h2>
            <input type="text" value={cityName} onChange={renameCity} />
        </section>
        <div></div>
        <input type = "submit" value = "Submit" />
        </form>

      </div>
  );
}


export default SearchForm