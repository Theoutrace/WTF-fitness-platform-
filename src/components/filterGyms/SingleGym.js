import React from "react";
import "./SingleGym.scss";
import mark from "./images/addressMark.png";
import dummImg from "./images/dummyImg.jpg";
import ReactStars from "react-stars";
import { useNavigate } from "react-router-dom";

const SingleGym = (props) => {
  const item = props.gymSingle;
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/gyms/${item.slug}`, { state: { gym: item } });
  }
  return (
    <div className="single-gym-frm-list-container" onClick={handleClick}>
      <div className="cover-img-image-cntnr">
        <img
          src={item.cover_image ? item.cover_image : dummImg}
          alt=""
          width={"100"}
        />
      </div>

      <div className="gym-details-single-item-in-list-cntnr">
        <div className="nme-adds-cnt-ner">
          <h2>{item.gym_name}</h2>
          <div className="rating-sng-gm-cnt">
            <ReactStars
              size={24}
              color1={"black"}
              color2={"white"}
              count={5}
              value={item.rating}
              edit={false}
            />
          </div>
          <h5>
            {item.address1}, {item.address2}, {item.city}
          </h5>
          <div className="mark-dist-time-cnt-nr">
            <img src={mark} alt="" width={"20"} />{" "}
            {(item.duration / 60).toFixed(2)} hrs | {item.distance} km
          </div>
        </div>
        <div className="gm-dtl-subs-price-book-btn-cnt-ner">
          <div className="mnth-price-txt">
            {item.plan_price && (
              <div>
                <span>₹</span> {item.plan_price} for 3 Months
              </div>
            )}
          </div>
          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleGym;
