import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { Button } from "react-bootstrap";

const Navbar = () => {
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <nav className="navs ">
      <Link to="/" className="nav-logs">
        RoadMaster
      </Link>

      <ul className="nav">
        <li>
          <Link to="/boad" className="nav-log">
            Complians
          </Link>
        </li>
        <li>
          <Link to="/create" className="nav-log">
            New Complians{" "}
          </Link>
        </li>

        <li>
          <Button variant="primary" onClick={handleLogout}>
            {" "}
            logOut{" "}
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
