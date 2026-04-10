import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import Arrow from "../../assets/svg/Arrow";

const Navbar = () => {
  return (
    <nav className="custom-navbar side-space">
      <div className="d-flex align-items-center justify-content-between">
        <div className="align-items-center">
          <img src={logo} alt="logo" className="logo" />
        </div>

        <div className="d-flex align-items-center gap-3">
          <div className="location">
            Pune{" "}
            <span className="dropdown-arrow">
              <Arrow />
            </span>
          </div>

          <button className="btn complaint-btn">Raise A Complaint</button>

          <button className="btn login-btn">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
