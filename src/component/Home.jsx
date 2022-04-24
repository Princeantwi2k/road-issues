import React, { useEffect } from "react";
import caro3 from "../Images/caro3.jpg";
import { Link } from "react-router-dom";
import Aos from "aos";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { Button } from "react-bootstrap";
import "./caro.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div>
        <img src={caro3} alt="pic" className="dede d-block w-100 " />
        <div className="boad">
          <div class="toggle" onclick="toggleMenu()">
            {" "}
          </div>
          <h3 className="logos">
            {" "}
            <Link to="/" className="carolink">
              RoadMaster
            </Link>{" "}
          </h3>
          <ul className="ul" data-aos="zoom-out-right">
            <li className="li">
              <Link to="/boad" className="carolinks">
                Complians
              </Link>
            </li>
            <li className="li">
              <Link to="/create" className="carolinks">
                NewComplians
              </Link>
            </li>

            <li>
              <li className="li">
                <Button variant="primary" onClick={handleLogout}>
                  {" "}
                  logOut{" "}
                </Button>
              </li>
            </li>
          </ul>
        </div>
        <div className="content" data-aos="flip-left">
          <div className="container">
            <h1 className="ring"> Road Traffic</h1>
            <p>
              Road traffic accidents remain a major public health and
              development challenge in Ghana. They are among the top 10 causes
              of deaths, draining 2.54% of its gross domestic product annually.
              Some recent reports suggest that between January and July 2021,
              about 8 deaths and 43 injuries were recorded daily on Ghana’s
              roads.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
