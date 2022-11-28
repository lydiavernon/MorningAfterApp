import React from "react";
import "./DSM.scss";
import Nav from "../ProjectNav/ProjectNav";
import dsm1 from "../../assets/events/DSM/dsm1.jpg";
import dsm2 from "../../assets/events/DSM/dsm2.jpg";

const DSM = () => {
  return (
    <div className="dsm__wrap">
      <Nav />
      <h1 className="DSM__title">DSM</h1>
      <p className="bio-text">
        Music curation, brand activation: Photo London 22 in-store event{" "}
      </p>
      <div className="dsm">
        <article className="dsm__img-wrap">
          <img className="dsm__img" src={dsm1} alt="dsm event" />
        </article>
        <article className="dsm__img-wrap">
          <img className="dsm__img" src={dsm2} alt="dsm event" />
        </article>
      </div>
    </div>
  );
};

export default DSM;
