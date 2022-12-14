import React from "react";
import "./Always.scss";
import always1 from "../../assets/events/always/always1.jpg";
import biarritz from "../../assets/events/always/biarritz.mp4";
import biarritzparty from "../../assets/events/always/biarritzparty.mp4";

import Nav from "../ProjectNav/ProjectNav";

const Always = () => {
  return (
    <div className="always__wrap">
      <Nav />
      <h1 className="always__title">ALWAYS DO WHAT YOU SHOULD DO</h1>
      <p className=" bio-text">
        Brand activation, Event production: pop-up, Biarritz premiere +
        afterparties
      </p>
      <div className="always">
        <article className="always__img-wrap always__video">
          <video className="always__img" src={biarritzparty} controls></video>
        </article>
        <article className="always__img-wrap">
          <img className="always__img" src={always1} alt="always event" />
        </article>

        <article className="always__img-wrap">
          <video className="always__img " src={biarritz} controls></video>
        </article>
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/puvPsT3jFrA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/aKQ1HVVFDQM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> */}
      </div>
    </div>
  );
};

export default Always;
