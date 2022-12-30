import React from "react";
import "./FooterTopStrip.scss";

const FooterTopStrip = () => {
  return (
    <div className="FooterTopStrip-container">
      <div className="strip-left-txt-cntnr">
        <h2>
          WTF Fitness
          <br /> Experience?
        </h2>
        <div className="txt-cntnr-lft">
          <div className="strip-inside-bfr-cost"></div>
          <h3>
            @ your regular <br />
            gym cost?
          </h3>
        </div>
      </div>

      <div className="service-container-gyms-page">
        <div className="upper-dv-xd">
          <img src="" alt="" />
          <div>
            {" "}
            Modern <br /> Equipments
          </div>
        </div>
        <div className="upper-dv-xd">
          <img src="" alt="" />
          <div>
            {" "}
            Skilled <br /> Trainer
          </div>
        </div>
        <div className="upper-dv-xd">
          <img src="" alt="" />
          <div>
            {" "}
            Top class <br /> Ambience
          </div>
        </div>
        <div className="upper-dv-xd">
          <img src="" alt="" />
          <div>
            {" "}
            Sanitized <br /> GYMS
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTopStrip;
