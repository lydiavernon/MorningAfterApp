import React from "react";
import { Link } from "react-router-dom";
import "./ProjectNav.scss";

const ProjectNav = () => {
  return (
    <div className="projectnav">
      <Link className="projectnav__link" to="/events/bonesoda">
        BONESODA
      </Link>
      <Link className="projectnav__link" to="/events/stussy">
        STUSSY
      </Link>
      <Link className="projectnav__link" to="/events/carhartt">
        CARHARTT
      </Link>
      <Link className="projectnav__link" to="/events/alwaysdowhatyoushoulddo">
        ALWAYS DO WHAT YOU SHOULD DO
      </Link>
      <Link className="projectnav__link" to="/events/DSM">
        DSM
      </Link>
    </div>
  );
};

export default ProjectNav;
