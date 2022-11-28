import React from "react";
import "./Stussy.scss";
import stussy1 from "../../assets/events/stussy/stussy1.mp4";
import stussy2 from "../../assets/events/stussy/stussy2.png";
import stussy3 from "../../assets/events/stussy/stussy3.jpg";
import stussy4 from "../../assets/events/stussy/stussy4.webp";
import stussy5 from "../../assets/events/stussy/stussy5.jpg";
import stussy6 from "../../assets/events/stussy/stussy6.webp";
import stussy7 from "../../assets/events/stussy/stussy7.mp4";
import Nav from "../ProjectNav/ProjectNav";

const Stussy = () => {
  return (
    <div className="stussy__wrap">
      <Nav />
      <h1 className="stussy__title">STUSSY</h1>
      <section className="stussy">
        <div className="wrapper">
          <article className="stussy__video">
            <video className="img" autoPlay muted loop src={stussy1}></video>
            <p className="img-tag">STUSSY PARIS STORE OPENING CAMPAIGN</p>
          </article>
          <article className="stussy__video">
            <p className="bio-text">
              Creative direction + Production: Beats video, Paris video
            </p>

            <p className="bio-text">
              Creative/Photography + Styling: Web photography, Noma Campaign
            </p>
            <p className="bio-text">
              Design + Consultancy: Consulting on various projects for the
              brand, Design for SS23 collection
            </p>
          </article>

          <article className="stussy__video">
            <img className="img" src={stussy6} alt="stussy" />
            <p className="img-tag">NOMA CAMPAIGN</p>
          </article>
          <article className="stussy__video">
            <img className="img" src={stussy4} alt="stussy" />
          </article>
          <article className="stussy__video">
            <video className="img" autoPlay muted loop src={stussy7}></video>
            <p className="img-tag">BEATS PILL CAMPAIGN</p>
          </article>
          <article className="stussy__video">
            <img className="img" src={stussy2} alt="stussy" />
            <p className="img-tag img-tag--lower">SS20 CAMPAIGN</p>
          </article>
          <article className="stussy__video">
            <img className="img" src={stussy3} alt="stussy" />
            <p className="img-tag">WEB PHOTOGRAPHY</p>
          </article>
          <article className="stussy__video">
            <img className="img" src={stussy5} alt="stussy" />
          </article>
        </div>
      </section>
    </div>
  );
};

export default Stussy;
