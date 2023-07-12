import React from "react";
import ThreeDots from "../images/icon-ellipsis.svg";
import "./Card.css";

const Card = ({ data, time }) => {
  return (
    <div className="Card__container">
      <div
        className="Card__background-image"
        style={{ backgroundColor: data.backgroundColor }}
      >
        <img src={data.image} alt="Test" />
      </div>
      <div className="Card__content">
        <div className="Card__top">
          <p className="Card__title">{data.title}</p>
          <img className="three-dots" src={ThreeDots} alt="three dots" />
        </div>
        <div className="hours">
          <p className="Card__value">{data.timeframes[time].current} hrs</p>
          <p className="Card__value-last-week">
            Last Week - {data.timeframes[time].previous} hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
