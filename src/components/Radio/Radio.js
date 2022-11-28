import React from "react";
import "./Radio.scss";

const Radio = () => {
  return (
    <div className="radio">
      <h1 className="radio__title">RADIO</h1>
      <iframe
        title="soundcloudEmbed"
        width="100%"
        height="450"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1533185608&color=%230066cc&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
      <div className="videos">
        <iframe
          src="https://player.vimeo.com/video/502306315?h=0ebef490a0"
          width="50%"
          height="360"
          title="Vimeo video player"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="50%"
          height="360"
          src="https://www.youtube.com/embed/py4qEMPH4fA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Radio;
