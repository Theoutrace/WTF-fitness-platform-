import React, { useEffect } from "react";
import "./PlanBanner.scss";
import logoImg from "../header/image/logoWtf.png";
import { useDispatch, useSelector } from "react-redux";
import { GymAction } from "../../store/reducers/GymListReducer";

const PlanBanner = (props) => {
  const AllSelectedPlans = useSelector((state) => state.gyms.selectedPlans);
  const dispatch = useDispatch();
  //   console.log(props);

  useEffect(() => {
    // console.log(AllSelectedPlans);
  }, [AllSelectedPlans.length]);
  const selectPlanHandler = () => {
    // console.log(props);
    dispatch(GymAction.addPlan([...AllSelectedPlans, props.item]));
  };
  return (
    <div
      onClick={selectPlanHandler}
      className="single-plan-container"
      style={{
        backgroundImage: `url(${props.item.images})`,
        objectFit: "contain",
      }}
    >
      <h2>Plan {props.id}</h2>
      <div className="price-pc-xd-prc-it">₹ {props.item.plan_price}</div>
      <div className="nme-rc-xd-prc">
        <img src={logoImg} alt="" />
        <div className="h2-h2-xdc">{props.item.plan_name}</div>
        <div className="durat-ion-ex-time">({props.item.duration}) Months</div>
      </div>
      <div className="txt-desc-grt-de">{props.item.description}</div>
    </div>
  );
};

export default PlanBanner;
