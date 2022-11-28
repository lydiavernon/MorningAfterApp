import React from "react";
import "./Always.scss";
import always1 from "../../assets/events/always/always1.jpg";
import always4 from "../../assets/events/always/always4.jpg";
import Nav from "../ProjectNav/ProjectNav";

const Always = () => {
  return (
    <div className="always__wrap">
      <Nav />
      <h1 className="always__title">ALWAYS DO WHAT YOU SHOULD DO</h1>
      <div className="always">
        <article className="always__img-wrap">
          <img className="always__img" src={always1} alt="always event" />
        </article>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/puvPsT3jFrA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <article className="always__img-wrap">
          <img className="always__img" src={always4} alt="always event" />
        </article>
      </div>
    </div>
  );
};

export default Always;
