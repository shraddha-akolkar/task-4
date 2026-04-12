import React from "react";
import "./Concern.css";
const Concern = () => {
  return (
    <div className="side-space">
      <div className="container my-5">
        <div className="concern-box d-flex flex-wrap align-items-center justify-content-between">
          {/* LEFT TEXT */}
          <div className="concern-text">
            <h2>Raise an Concern</h2>
            <p>Over 5,000 concerns have been reported to local authorities.</p>
          </div>

          {/* RIGHT BUTTON */}
          <div>
            <button className="concern-btn">Raise a Complaint</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concern;
