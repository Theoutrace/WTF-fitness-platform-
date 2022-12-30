import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Filter from "../components/filterGyms/Filter";
import GymDisplay from "../components/filterGyms/GymDisplay";
import Search from "../components/filterGyms/Search";
import HeroImage from "../components/hero/HeroImage";
import "./Gyms.scss";

const Gyms = () => {
  const AllGyms = useSelector((state) => state.gyms.gyms);
  const [displayData, setDisplayData] = useState(AllGyms);
  // console.log(AllGyms.gyms);
  useEffect(() => {
    setDisplayData(() => AllGyms);
  }, [AllGyms.length]);

  const getSearchValHandler = (val) => {
    const filteredGym = AllGyms.filter((i) =>
      i.gym_name.toLowerCase().includes(val.toLowerCase())
    );
    // console.log(filteredGym);
    setDisplayData(filteredGym);
  };

  const getLocationValHandler = (val) => {
    const filteredGym = AllGyms.filter((i) =>
      i.address2.toLowerCase().includes(val.toLowerCase())
    );
    setDisplayData(filteredGym);
  };

  const getCityValHandler = (val) => {
    const filteredGym = AllGyms.filter((i) =>
      i.city.toLowerCase().includes(val.toLowerCase())
    );
    setDisplayData(filteredGym);
  };

  const resetDisplayDataAfterClearInputData = () => {
    setDisplayData(() => AllGyms);
  };

  return (
    <div className="gyms-page-cntnr">
      <HeroImage />
      <div className="search-n-filter-cntnr">
        <Search
          onNameSearch={getSearchValHandler}
          onClearInput={resetDisplayDataAfterClearInputData}
        />
        <div className="filter-n-display-cntnr">
          <Filter
            onLocationSearch={getLocationValHandler}
            onCitySearch={getCityValHandler}
          />
          <GymDisplay gymList={displayData} />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Gyms;
