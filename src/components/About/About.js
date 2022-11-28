import React from "react";
import "./About.scss";
import logo1 from "../../assets/collaborators/logo1.png";
import logo2 from "../../assets/collaborators/logo2.png";
import logo3 from "../../assets/collaborators/logo3.png";
import logo4 from "../../assets/collaborators/logo4.png";
import logo5 from "../../assets/collaborators/logo5.jpg";
import logo6 from "../../assets/collaborators/logo6.png";

const About = () => {
  return (
    <div className="about">
      <h1 className="about__title">ABOUT</h1>
      <h3 className="about__text">
        Morning After Night Before is a creative collective specialising in
        brand strategy, talent management and event planning. The team comprises
        of young industry insiders and experts with backgrounds in design, music
        and entertainment. Persistently striving to find better ways to connect
        new audiences with the next generation of creatives and brands a like.
      </h3>
      <div className="collaborators">
        <h3 className="collaborators__title">Collaborators</h3>
        <section className="collaborators__cards">
          <article className="collaborators__card">
            <img
              src={logo1}
              alt="collaborator"
              className="collaborators__img"
            />
          </article>
          <article className="collaborators__card">
            <img
              src={logo2}
              alt="collaborator"
              className="collaborators__img"
            />
          </article>
          <article className="collaborators__card">
            <img
              src={logo3}
              alt="collaborator"
              className="collaborators__img"
            />
          </article>
          <article className="collaborators__card">
            <img
              src={logo4}
              alt="collaborator"
              className="collaborators__img"
            />
          </article>
          <article className="collaborators__card">
            <img
              src={logo5}
              alt="collaborator"
              className="collaborators__img"
            />
          </article>
          <article className="collaborators__card">
            <img
              src={logo6}
              alt="collaborator"
              className="collaborators__img"
            />
          </article>
        </section>
      </div>
    </div>
  );
};

export default About;
