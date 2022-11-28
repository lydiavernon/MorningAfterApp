import React from "react";
import "./Management.scss";
import mgmt1 from "../../assets/management/mgmt1.jpg";
import mgmt2 from "../../assets/management/mgmt2.jpg";

const Management = () => {
  return (
    <div className="management">
      <h1 className="management__title">MGMT</h1>
      <section className="management__main">
        <article className="management__img-wrap">
          <img className="management__img" src={mgmt1} alt="always event" />
        </article>
        <article className="management__img-wrap">
          <img className="management__img" src={mgmt2} alt="always event" />
        </article>
      </section>
    </div>
  );
};

export default Management;
