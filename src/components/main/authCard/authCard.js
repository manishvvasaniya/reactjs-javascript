import React from "react";
import Img from "../../img/img";
import Button from "../../button/button";
import { Link } from "react-router-dom";
import "./authCard.scss";
const authCard = ({ title, text, button, path, img, className }) => {
  return (
    <div className={`auth-card text-title ${className || ""}`}>
      <h1>{title}</h1>
      <div className="auth-image-block">
        <Img src={img} className="auth-image"></Img>
      </div>
      <div className="text-block">
        <span className="text-md ">{text}</span>
      </div>
      <div className="button-block">
        <Link to={path}>
          <Button type="primary" shape="round">
            {button}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default authCard;
