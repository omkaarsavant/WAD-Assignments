import React from 'react';
import { NavLink } from 'react-router-dom';
import image from "./assets/1.png";

export default function index() {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-light navbar-expand-md bg-faded justify-content-center bg-info text-white my-2">
          <div className="p-2 w-90 d-flex justify-content-center align-items-center">  {/* Added flexbox styles */}
            <NavLink className="nav-item" to="/app">
              <center>
                <button type="button" className="btn btn-link text-light">
                  <img src={image} alt="App icon" width="100" height="100" />
                  <br />
                  Share
                </button>
              </center>
            </NavLink>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse w-10" id="collapsingNavbar3">
            <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
              {/* ... */}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}