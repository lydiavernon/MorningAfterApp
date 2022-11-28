import React from "react";
import "./Stussy.scss";
import stussy1 from "../../assets/events/stussy/stussy1.mp4";
import stussy2 from "../../assets/events/stussy/stussy2.png";
import stussy3 from "../../assets/events/stussy/stussy3.webp";
import stussy4 from "../../assets/events/stussy/stussy4.webp";
import stussy5 from "../../assets/events/stussy/stussy5.jpg";
import stussy6 from "../../assets/events/stussy/stussy6.webp";
import stussy7 from "../../assets/events/stussy/stussy7.mp4";
import Nav from "../ProjectNav/ProjectNav";

const Stussy = () => {
  return (
    <div className="stussy__wrap">
      <Nav />
      <section className="stussy">
        <div className="wrapper">
          <article className="stussy__video">
            <video className="img" autoPlay muted loop src={stussy1}></video>
            <p className="stussy__text">STUSSY PARIS STORE OPENING CAMPAIGN</p>
          </article>
          <article className="stussy__video">
            <p className="stussy__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit,
              voluptatum voluptatibus
            </p>
          </article>
          <article className="stussy__video">
            <img className="img" src={stussy2} alt="stussy" />
            <p className="stussy__text">first video</p>
          </article>
          <article className="stussy__video">
            <img className="img" src={stussy3} alt="stussy" />
          </article>

          <article className="stussy__video">
            <img className="img" src={stussy4} alt="stussy" />
          </article>
          <article className="stussy__video">
            <video className="img" autoPlay muted loop src={stussy7}></video>
          </article>
          <article className="stussy__video">
            <img className="img" src={stussy5} alt="stussy" />
          </article>

          <article className="stussy__video">
            <img className="img" src={stussy6} alt="stussy" />
          </article>
        </div>
      </section>
    </div>
  );
};

export default Stussy;
