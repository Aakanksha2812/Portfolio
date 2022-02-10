import React from "react";
import "./home.css";
import Navbar from "./Navbar";
import footer from './footer'
import NavLink from "react-router-dom";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import {
  FaEnvelopeOpenText,
  FaCss3,
  FaReact,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import {AiOutlineMail} from 'react-icons/ai';
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
              I design and develop website. i like to work on HTML,CSS,Javascript,React,nodejs
            </p>
            <div className="social-media">
           

              <a
                href="https://www.linkedin.com/in/aakanksha-shinde-a32205216"
                className="icon-button2"
              >
                <AiFillLinkedin size={50} style={{ color: "#0e76a8" }} />
              </a>
              <a
                href="https://github.com/Aakanksha2812"
                className="icon-button1"
              >
                <AiFillGithub size={50} style={{ color: "black" }} />
              </a>
              <a href="shindeaakanksha28@gmail.com" className="icon-button3">
                <FaEnvelopeOpenText size={40} style={{ color: "#3498db" }} />
              </a>
            </div>
            
            
          </div>
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
        </div>
      </div>
      <footer/>
    </div>
    
  );
}
export default home;
