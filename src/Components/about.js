import { Button } from "bootstrap";
import React from "react";
import img from "../Assets/m3.png";
import "./about.css";
function about() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card">
          <img src={img} className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <div className="a-title">
          <h1>About me</h1>
        </div>
        <div className="a-text">
          <p>
            {" "}
            My name is Aakanksha Shinde. I am Enginnering Student. <br /> i am
            doing engineering from Aissms Ioit. I am web developer. <br />i am
            working on HTML,CSS, Javascript,React, nodejs,Mysql.
            <br />
            apart from that i like reading,cooking,travelling
          </p>
          <Button>resume</Button>
        </div>
      </div>{" "}
    </div>
  );
}
export default about;
