import React from "react";
import heroImgw from "./image/heroImgww.webp";
import "./HeroImg.scss";

const HeroImage = () => {
  return (
    <div className="heroImg-container-div">
      <img className="heroImg-container" src={heroImgw} alt="" />
    </div>
  );
};

export default HeroImage;
