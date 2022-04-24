import React, { Component } from "react";
import Notification from "./Notification";
import Project from "./Project";

class Dashboad extends Component {
  render() {
    return (
      <div className="dashboad container">
        <div className="row">
          <div className="col s12 m6" style={{ marginTop: 50 }}>
            <Project />
          </div>
          <div className="col s12 m5  ">
            <Notification />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboad;
