import React from "react";
import Img from "../../img/img";
import "./infoCard.scss";
const infoCard = ({ count, text, img }) => {
  return (
    <div className="info-card">
      <div>
        <div className="info-image-block">
          <Img src={img} className="info-image"></Img>
        </div>
        <div className="info-count-block">
          <h1 className="color-primary">{count}</h1>
        </div>
        <div className="info-text-block">
          <span className="text-md text-w-500">{text}</span>
        </div>
      </div>
    </div>
  );
};

export default infoCard;
