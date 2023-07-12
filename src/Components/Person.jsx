import React from "react";
import Jeremy from "../images/image-jeremy.png";
import "./Person.css";

const Person = ({ setTime }) => {
  return (
    <div className="person__container">
      <div className="person__info">
        <img src={Jeremy} alt="Jeremy" className="person-image" />
        <div className="person__text">
          <p className="report-for">Report for</p>
          <p className="person-name">Jeremy Robson</p>
        </div>
      </div>
      <div className="person__choices">
        <p
          onClick={() => {
            setTime("daily");
          }}
        >
          Daily
        </p>
        <p
          onClick={() => {
            setTime("weekly");
          }}
        >
          Weekly
        </p>
        <p
          onClick={() => {
            setTime("monthly");
          }}
        >
          Monthly
        </p>
      </div>
    </div>
  );
};

export default Person;
