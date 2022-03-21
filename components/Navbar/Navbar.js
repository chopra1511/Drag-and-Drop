import React from "react";
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <h3>Tickets</h3>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="btn btn-success">ALL</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-light">ONLY MY TICKETS</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-light">ONLY MY TICKETS</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-light">RECENTLY UPDATED</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-light">
                <i className="fa-solid fa-filter"></i>
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-light">
                <i className="fa-solid fa-arrows-rotate"></i>
              </button>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item search">
              <h5>Search</h5>
              <i className="fa-solid fa-magnifying-glass"></i>
            </li>
            <li className="nav-item config">
              <button className="btn btn-light">
                <i className="fa-solid fa-gear"></i> Configurations
              </button>
            </li>
            <li className="nav-item range">
              <p>(0-30)</p>
            </li>
            <li className="nav-item">
              <button className="btn btn-light">
                <i className="fa-solid fa-angle-left"></i>
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-light">
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


