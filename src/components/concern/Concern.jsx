import React from "react";
import "./Concern.css";

const Concern = () => {
  return (
    <div className="concern-wrapper side-space section-space">
      <div className="row concern-section align-items-center justify-content-between m-0">
        <div className="col-md-8 text-content">
          <h2>Raise an Concern</h2>
          <p>Over 5,000 concerns have been reported to local authorities.</p>
        </div>

        <div className="col-md-4 text-md-end text-center mt-3 mt-md-0">
          <button className="concern-btn">Raise a Complaint</button>
        </div>
      </div>
    </div>
  );
};

export default Concern;
