import React from "react";
import "./Filter.scss";
import searchIcon from "./images/searchImg.png";

const Filter = (props) => {
  const enterLocationHandler = (e) => {
    props.onLocationSearch(e.target.value);
  };

  const enterCityHandler = (e) => {
    props.onCitySearch(e.target.value);
  };
  return (
    <div className="filter-container-flt">
      <form>
        <h3>Filters</h3>
        <label htmlFor="location">Location</label>
        <div className="location-inp-cnt">
          <input
            id="location"
            type="text"
            placeholder="Enter location"
            onChange={enterLocationHandler}
          />
          <img src={searchIcon} alt="" />
        </div>

        <label htmlFor="price">Price</label>
        <div className="max-min-cntnr-m-m">
          <input
            className="max-min-input-bx"
            id="price"
            type="number"
            placeholder="Min"
          />
          <input
            className="max-min-input-bx-2"
            type="number"
            placeholder="Max"
          />
        </div>

        <label htmlFor="city">Cities</label>
        <select id="city" name="city" onChange={enterCityHandler}>
          <option disabled selected>
            Select city
          </option>
          <option value="ghaziabad">Ghaziabad</option>
          <option value="noida">Noida</option>
          <option value="delhi">Delhi</option>
          <option value="newdelhi">New Delhi</option>
        </select>
      </form>
    </div>
  );
};

export default Filter;
