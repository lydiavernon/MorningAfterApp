import React from "react";
import videobackground from "../../assets/events/stussy/stussyvideocut.mp4";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <video className="videoBackground" autoPlay muted loop id="myVideo">
        <source src={videobackground} type="video/mp4" />
      </video>
    </div>
  );
};

export default Home;
