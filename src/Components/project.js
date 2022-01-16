import React from "react";
import "./project.css";

function project() {
  return (
    <div>
      <div className="p-title">My Projects</div>
      <div className="project-div">
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Simple Chat app</h5>
                <p class="card-text">
                  <div>
                    <ul className="ultag">
                      <li>
                        It is Simple Chat app. multiple user can chat same time.
                      </li>
                      <li>
                        Technologies used are HTML,CSS,Javascript,Nodejs,Express
                      </li>
                      <li>socket.io libary has been used</li>
                    </ul>
                  </div>
                </p>
                <a
                  href="https://github.com/Aakanksha2812/simplechat"
                  className="btn btn-primary"
                  className="a-text"
                >
                  Github Repository
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card" >
              <div class="card-body">
                <h5 class="card-title">Login System</h5>
                <p class="card-text">
                  <ul className="ultag">
                    <li>
                      It is simple login System.which contain sign up and login
                    </li>
                    <li>Technologies used are React, nodejs,Express, Mysql </li>
                    <li></li>
                  </ul>
                </p>
                <a
                  href="https://github.com/Aakanksha2812/loginsyste"
                  className="btn btn-primary"
                  className="a-text"
                >
                  Github Repository
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">TO do List</h5>
                <p class="card-text">
                  <div>
                    <ul className="ultag">
                      <li>
                        It is To do list.you can add your list and delete also
                      </li>
                      <li>It is in React </li>
                    </ul>
                  </div>
                </p>
                <a href="#" class="btn btn-primary" className="a-text">
                  Github Repository
                </a>
              </div>
            </div>
          </div>
          </div>
          </div>
    </div>
  );
}
export default project;
