import React from "react";
import "./home.css";
import Navbar from "./Navbar";
import footer from "./footer";
import NavLink from "react-router-dom";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import img1 from "../Assets/giphy.gif";
import {
  FaEnvelopeOpenText,
  FaCss3,
  FaReact,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import homeimg from "../Assets/homeimage.jpeg";
import Typical from "react-typical";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import { DiMongodb, DiMysql } from "react-icons/di";
function home() {
  return (
    <div>
      <Navbar />
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hello, My name is</h2>
            <h1 className="i-name">Aakanksha Shinde</h1>
            <div className="i-title">
              <div className="i-title-wrapper text2">
                <Typical
                  steps={[
                    "Full Stack Web Developer",
                    1000,
                    "Student",
                    1000,
                    "Curious",
                    1000,
                    "Learner",
                    1000,
                    "Cook",
                    1000,
                    "doughter, sister, friend",
                  ]}
                  loop={Infinity}
                />
              </div>
            </div>
            <p className="i-desc text">
              I design and develop website. i like to work on
              HTML,CSS,Javascript,React,nodejs
            </p>
          </div>
        </div>
        <div className="i-right">
          <img src={img1} />
        </div>
      </div>
      <footer />
    </div>
  );
}
export default home;
