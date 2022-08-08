import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DateTimePicker from "react-datetime-picker";
import "../App.css";


const SearchForm = (props) => {
    const [cityName, setCityName] = useState('Seattle');
    const [myDate, setDate] = useState(new Date());
    
    
    // const [startDate, setStartDate] = useState(new Date());


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
      props.getRestaurants(cityName, myDate, timeChosen)
    }
  
  

  return (

  <div className = "search-panel-container">
    <form onSubmit = {handleSubmit}>
      <section className='search-bar-elems'>
    <DateTimePicker type="button" clearIcon={null} format='yyyy-MM-dd' value = {myDate}  minDate={new Date()} selected={myDate} onChange={(myDate) => setDate(myDate)} shouldCloseOnSelect={false}/>
      {/* <p>
        <span>Selected Date:</span>{' '}
        {myDate.toDateString()}
      </p> */}
      </section>
      <section className='search-bar-elems'>
          {/* <label> Reservation Time </label> */}
          <select onChange={chooseTime} type="button" 
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
        </section>
        <section className='search-bar-elems'>
            <input type="text" value={cityName} onChange={renameCity} />
        <input type = "submit" value = "Go" />
        </section>
        </form>
      </div>
  );
}


export default SearchForm