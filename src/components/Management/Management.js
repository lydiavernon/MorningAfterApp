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
          <p className="img-tag">Jeshi - Tour management + dj</p>
          <iframe
            className="management__embed"
            title="jeshi-spotify"
            src="https://open.spotify.com/embed/artist/0q8eApZJs5WDBxayY9769C?utm_source=generator"
            width="100%"
            height="380"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </article>
        <article className="management__img-wrap">
          <img className="management__img" src={mgmt2} alt="always event" />
          <p className="img-tag">Jawnino - management</p>
          <iframe
            className="management__embed"
            title="jawnino-spotify"
            src="https://open.spotify.com/embed/artist/0nnECIkl6LBEbZdov3nTEj?utm_source=generator"
            width="100%"
            height="380"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </article>
      </section>
    </div>
  );
};

export default Management;
