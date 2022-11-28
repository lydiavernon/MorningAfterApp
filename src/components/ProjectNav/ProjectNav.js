import React from "react";
import { Link } from "react-router-dom";

const ProjectNav = () => {
  return (
    <div>
      <Link className="events__link" to="/events/bonesoda">
        BONESODA
      </Link>
      <Link className="events__link" to="/events/stussy">
        STUSSY
      </Link>
      <Link className="events__link" to="/events/carhartt">
        CARHARTT
      </Link>
      <Link className="events__link" to="/events/alwaysdowhatyoushoulddo">
        ALWAYS DO WHAT YOU SHOULD DO
      </Link>
    </div>
  );
};

export default ProjectNav;
