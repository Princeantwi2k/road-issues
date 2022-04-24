import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-div">
        <h1 className="footer-name">RoadMaster</h1>
      </div>
      <div>
        {" "}
        <p className="p">&copy; 2021 All Rights Reserved, RoadMaster.</p>
      </div>
      <div className="footer-divs">
        <p>
          <Link to="/boad" className="link">
            Complains
          </Link>
        </p>
        <p>
          <Link to="/new " className="link">
            New Complains
          </Link>
        </p>
        <p>
          <Link to="/news" className="link">
            News
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
