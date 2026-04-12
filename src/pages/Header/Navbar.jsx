import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import Arrow from "../../assets/svg/Arrow";

const Navbar = () => {
  return (
    <nav className="nav-main side-space">
      <div className="d-flex align-items-center justify-content-between">
        {/* LEFT: LOGO */}
        <div className="d-flex align-items-center">
          <img src={logo} alt="logo" className="logo" />
        </div>

        {/* RIGHT */}
        <div className="d-flex align-items-center gap-3">
          {/* LOCATION */}
          <div className="location d-flex align-items-center">
            Pune
            <span className="ms-1 dropdown-arrow">
              <Arrow />
            </span>
          </div>

          {/* BUTTONS */}
          <button className="btn complaint-btn">Raise A Complaint</button>

          <button className="btn login-btn">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
