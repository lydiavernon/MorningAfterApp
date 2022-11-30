import React from "react";
import "../Events/Events.scss";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div className="container">
      <h1>CREATIVE + EVENTS</h1>
      <div className="events">
        <Link className="events__link" to="/events/stussy">
          STUSSY
        </Link>
        <Link className="events__link" to="/events/bonesoda">
          BONESODA
        </Link>
        <Link className="events__link" to="/events/carhartt">
          CARHARTT
        </Link>
        <Link className="events__link" to="/events/alwaysdowhatyoushoulddo">
          ALWAYS DO WHAT YOU SHOULD DO
        </Link>
        <Link className="events__link" to="/events/dsm">
          DSM
        </Link>
      </div>
    </div>
  );
};

export default Events;
