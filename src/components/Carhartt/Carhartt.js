import React from "react";
import "./Carhartt.scss";
import carhartt1 from "../../assets/events/carhartt/carhartt1.png";
import carhartt2 from "../../assets/events/carhartt/carhartt2.png";
import carhartt3 from "../../assets/events/carhartt/carhartt3.png";
import carhartt4 from "../../assets/events/carhartt/carhartt4.mp4";

import Nav from "../ProjectNav/ProjectNav";

const Carhartt = () => {
  return (
    <div className="carhartt__wrap">
      <Nav />
      <h1 className="DSM__title">CARHARTT</h1>
      <p className="bio-text">
        Carhartt x Morning After: AFTRWRKS Events series{" "}
      </p>
      <div className="carhartt">
        <article className="carhartt__img-wrap">
          <video className="img" autoPlay loop src={carhartt4}></video>
          <p className="img-tag img-tag--lower">MA x CARHARTT : AFTRWRKS</p>
        </article>
        <article className="carhartt__img-wrap">
          <img className="carhartt__img" src={carhartt2} alt="carhartt event" />
        </article>
        <article className="carhartt__img-wrap">
          <img className="carhartt__img" src={carhartt3} alt="carhartt event" />
        </article>
        <article className="carhartt__img-wrap">
          <img className="carhartt__img" src={carhartt1} alt="carhartt event" />
        </article>
      </div>
    </div>
  );
};

export default Carhartt;
