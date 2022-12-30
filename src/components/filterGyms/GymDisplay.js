import React from "react";
import "./GymDisplay.scss";
import SingleGym from "./SingleGym";

const GymDisplay = (props) => {
  return (
    <div className="GymDisplay-container">
      {props.gymList.map((item) => {
        return <SingleGym key={item.user_id} gymSingle={item} />;
      })}
    </div>
  );
};

export default GymDisplay;
