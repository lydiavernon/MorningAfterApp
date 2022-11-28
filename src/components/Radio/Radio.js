import React from "react";
import "./Radio.scss";

const Radio = () => {
  return (
    <div className="radio">
      <h1 className="radio__title">RADIO</h1>
      <iframe
        width="640"
        height="360"
        src="https://www.youtube.com/embed/py4qEMPH4fA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        src="https://player.vimeo.com/video/502306315?h=0ebef490a0"
        width="640"
        height="360"
        title="Vimeo video player"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Radio;
