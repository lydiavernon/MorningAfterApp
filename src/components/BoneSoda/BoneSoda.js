import React from "react";
import "../BoneSoda/BoneSoda.scss";
import bonesoda1 from "../../assets/events/bonesoda/bonesoda1.mp4";
import bonesoda2 from "../../assets/events/bonesoda/bonesoda2.mp4";
import bonesoda3 from "../../assets/events/bonesoda/bonesoda3.mp4";
import Nav from "../ProjectNav/ProjectNav";

const BoneSoda = () => {
  return (
    <div className="bonesoda__wrap">
      <Nav />
      <section className="bonesoda">
        <h1 className="bonesoda__title">BONESODA</h1>
        <p className="bio-text">
          A&R + Music Curation: Spotify Playlist, NTS Show
        </p>
        <iframe
          title="soundcloud 2"
          src="https://open.spotify.com/embed/playlist/6dMYyVll7vv9LBGtLS0Ohd?utm_source=generator"
          width="100%"
          height="380"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          title="soundcloud 1"
          width="100%"
          height="450"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1286323927&color=%230066cc&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
        <p className="bio-text">
          Production, Programming + Events coordination:
        </p>

        <section className="bonesoda__videos">
          <article className="bonesoda__video-wrap">
            <video
              className="bonesoda__video"
              autoPlay
              muted
              loop
              src={bonesoda2}
            ></video>
            <h3 className="img-tag">Paris Texas interview</h3>
          </article>
          <article className="bonesoda__video-wrap">
            <video
              className="bonesoda__video"
              autoPlay
              muted
              loop
              src={bonesoda1}
            ></video>
            <h3 className="img-tag">PinkPantheress Interview</h3>
          </article>
          <article className="bonesoda__video-wrap">
            <video
              className="bonesoda__video"
              autoPlay
              muted
              loop
              src={bonesoda3}
            ></video>
            <h3 className="img-tag">Dexter live session</h3>
          </article>
        </section>
      </section>
    </div>
  );
};

export default BoneSoda;
