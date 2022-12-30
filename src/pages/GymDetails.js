import React, { useEffect, useState } from "react";
import { json, useLocation, useNavigate } from "react-router-dom";
import ReactStars from "react-stars";
import locationIcon from "../../src/components/filterGyms/images/locationImg.png";
import PlanBanner from "../components/planBanner/PlanBanner";
import BoxCard from "./card/BoxCard";
import "./GymDetails.scss";
import backIcon from "./images/backIcon.png";
import ambiIcon from "./images/ambi.png";
import memIcon from "./images/mem.png";
import traIcon from "./images/train.png";
import veriIcon from "./images/verify.png";
import jsonData from "../json/GymDetails.json";

const GymDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location.state.gym);
  const [plans, setPlans] = useState([]);
  const details = location.state.gym;

  useEffect(() => {
    //================================================= Api call ===================================
    (async function getData() {
      const response = await fetch("https://devapi.wtfup.me/gym/plan", {
        method: "POST",
        body: JSON.stringify({ gym_id: `${location.state.gym.user_id}` }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());

      // console.log(response);
      setPlans(() => response.data);
    })();

    //================================================= if Api call didn't work or deactivated ===================================

    // (async function getData() {
    //   setPlans(() => jsonData.data);
    // })();
  }, []);

  const goBackFromDetailsHandler = () => {
    navigate("/gyms");
  };

  return (
    <div className="desc-gymdetails-co-nta-iner">
      <button
        onClick={goBackFromDetailsHandler}
        className="btn-bck-back-detail"
      >
        <img src={backIcon} alt="" />
        Back
      </button>
      <div className="desc-upp-body-details-m-dtl">
        <div className="desc-inn-bdy-ho-bd">
          <div className="left-box-for-logo"></div>
          <img className="coverImg-im-g" src={details.cover_image} alt="" />
        </div>
        <div className="name-sc-udy-s-m">
          <div className="nme-name-gm-gym">
            <h2>
              {details.gym_name}
              <img src={veriIcon} alt="" />{" "}
            </h2>
            <h3>
              <img src={locationIcon} alt="" />
              {details.address2},{details.address1}
            </h3>
          </div>
          <div className="rating-rt-container-outer">
            <ReactStars value={details.rating} edit={false} size={28} />
            <h4>{details.total_rating} Ratings</h4>
          </div>
        </div>
      </div>

      <div className="desc-underbody-details-desc">
        <div className="desc-desc-cnt-nr-in">
          <h3>Description</h3>
          <h4>{details.description}</h4>
          <div className="facilities-details-fcl-ts">
            <h3>Facilities</h3>
            <div className="facilities-types-dv-detl-sngl">
              <h4>Sanitized Gym</h4>
              <h4>Skilled Trainer</h4>
              <h4>Modern Equipments</h4>
              <h4>Fully AC</h4>
              <h4>CCTV</h4>
              <h4>Praking</h4>
            </div>
          </div>
          <div className="wgy-wtf-qq-op-dv-outer">
            <h3>Why to choose WTF?</h3>
            <div className="why-opt-ans-chk-bx-bb">
              <BoxCard>
                <h4>
                  Earn WTF rewards
                  <br /> coin
                </h4>
              </BoxCard>
              <BoxCard>
                <h4>
                  Fully Vaccinated
                  <br /> Staff
                </h4>
              </BoxCard>
              <BoxCard>
                <h4>
                  Track Fitness
                  <br /> Journey
                </h4>
              </BoxCard>
              <BoxCard>
                <h4>
                  Pocket Friendly
                  <br /> Membership
                </h4>
              </BoxCard>
            </div>
          </div>
          <div className="how-wrkop-dv-outer">
            <h3>How it works?</h3>
            <div className="how-ans-chk-bx-lr">
              <div className="sngl-how-ans-chk">
                <img src={memIcon} alt="" />
                <h4>
                  Pick membership start data and complete your subscription by
                  clicking Buy Now below
                </h4>
              </div>
              <div className="sngl-how-ans-chk">
                <img src={traIcon} alt="" />
                <h4>
                  A dedicated general trainer will be assigned after you have
                  taken your subscription
                </h4>
              </div>{" "}
              <div className="sngl-how-ans-chk">
                <img src={ambiIcon} alt="" />
                <h4>Explore WTF and start your fitness journey</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="single-over-map-itm">
          <h2>Choose Membership</h2>
          <div>
            {plans.map((item) => {
              const idx = plans.findIndex((i) => i.id === item.id);
              return (
                <PlanBanner key={item.plan_uid} item={item} id={idx + 1} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymDetails;
