import React from "react";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import {
  FaEnvelopeOpenText,
  FaCss3,
  FaReact,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";

import "./contact.css";
function contact() {
  return (
   /* <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <div className="c-title">Contact Me</div>
          <div className="c-info">
            <div className="c-info-item">
            <div>
              <a href="shindeaakanksha28@gmail.com" className="icon-button3">
                <FaEnvelopeOpenText size={40} style={{ color: "#3498db" }} />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/aakanksha-shinde-a32205216"
                className="icon-button2"
              >
                <AiFillLinkedin size={50} style={{ color: "#0e76a8" }} />
              </a>
              </div>
            </div>
            <div>
            <a href="https://drive.google.com/file/d/1-yaTG0X5ntmcQEb9I_zGAbj4Sfgwaaok/view?usp=sharing">
                <button className="btn btn-primary"> MY Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>*/
<div className="card-div">
<div class="card">
  <div class="card-header">
    Contact 
  </div>
  <div class="card-body">
    <h5 class="card-title">Contact Me</h5>
    <p class="card-text">
    <div>
                    <ul className="ultag">
                      <li>
                      <div>
              <a href="shindeaakanksha28@gmail.com" className="icon-button3">
                <FaEnvelopeOpenText size={40} style={{ color: "#3498db" }} />
              </a>
              shindeaakanksha28@gmail.com
            </div>
                      </li>
                      <li>
                      <div>
              <a
                href="https://www.linkedin.com/in/aakanksha-shinde-a32205216"
                className="icon-button2"
              >
                <AiFillLinkedin size={50} style={{ color: "#0e76a8" }} />
              </a>
              </div>
                      </li>
                      
                    </ul>
                  </div>
    </p>
    <a href="https://drive.google.com/file/d/1-yaTG0X5ntmcQEb9I_zGAbj4Sfgwaaok/view?usp=sharing" class="btn btn-primary">Resume</a>
  </div>
</div></div>
  );
}
export default contact;
