import React, { useState } from "react";
import searchIcon from "./images/searchImg.png";
import locationIcon from "./images/locationImg.png";
import "./Search.scss";

const Search = (props) => {
  // const [location, setLocation] = useState({});
  const [val, setVal] = useState("");
  const searchNamehandler = (e, text) => {
    setVal(() => e.target.value);
    if (e.target.value.length > 0) {
      setVal(() => e.target.value);
      props.onNameSearch(e.target.value);
    } else {
      props.onClearInput();
    }
  };

  const clearInputVal = () => {
    setVal(() => "");
    props.onClearInput();
  };

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
    });
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="inp-ut-ut"
          placeholder="Search gym name here..."
          onChange={searchNamehandler}
          value={val}
        />

        <img className="searchIcon-class" src={searchIcon} alt="" />
        <button onClick={getUserLocation} className="location-btn">
          <img src={locationIcon} alt="" />
        </button>
        <button className="clr-btn" onClick={clearInputVal}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default Search;
