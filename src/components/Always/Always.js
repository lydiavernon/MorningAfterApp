import React from "react";
import "./Always.scss";
import always1 from "../../assets/events/always/always1.jpg";
import always2 from "../../assets/events/always/always2.PNG";
// import always3 from "../../assets/events/always/always3.mp4";

const Always = () => {
  return (
    <div className="always">
      {/* <article className="always__img-wrap">
        <video className="img" autoPlay muted loop src={always3}></video>
      </article> */}
      <article className="always__img-wrap">
        <img className="always__img" src={always1} alt="always event" />
      </article>
      <article className="always__img-wrap">
        <img className="always__img" src={always2} alt="always event" />
      </article>
    </div>
  );
};

export default Always;
