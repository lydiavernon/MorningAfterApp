import React from "react";
import "./Carhartt.scss";
import carhartt1 from "../../assets/events/carhartt/carhartt1.png";
import carhartt2 from "../../assets/events/carhartt/carhartt2.png";
import carhartt3 from "../../assets/events/carhartt/carhartt3.png";
import Nav from "../ProjectNav/ProjectNav";

const Carhartt = () => {
  return (
    <div className="carhartt__wrap">
      <Nav />
      <h1 className="DSM__title">CARHARTT</h1>
      <div className="carhartt">
        <article className="carhartt__img-wrap">
          <img className="carhartt__img" src={carhartt1} alt="carhartt event" />
        </article>
        <article className="carhartt__img-wrap">
          <img className="carhartt__img" src={carhartt2} alt="carhartt event" />
        </article>
        <article className="carhartt__img-wrap">
          <img className="carhartt__img" src={carhartt3} alt="carhartt event" />
        </article>
      </div>
    </div>
  );
};

export default Carhartt;
