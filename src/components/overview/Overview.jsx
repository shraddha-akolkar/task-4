import React from "react";
import "./Overview.css";
import Search from "../../assets/svg/Search";

const Overview = () => {
  return (
    <div className="overview-section  side-space">
      <div className="overview-subsection">
        <div className="overview-main">
          <h2>
            MyJansevak - Empowering those <br />
            building the future.
          </h2>

          <p>
            We offer bespoke platform to enhance, harness the true potential in
            our citizens and leaders.
          </p>

          <div className="search-box">
            <span className="search-icon">
              <Search />
            </span>
            <input
              type="text"
              placeholder="Search corporator, MLA, MP etc..."
            />
            <button className="overview-button">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
