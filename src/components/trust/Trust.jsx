import React from "react";
import "./Trust.css";

const Stats = () => {
  const stats = [
    { number: "1,200+", label: "Affidavits Digitized and Analyzed." },
    {
      number: "50,000+",
      label: "Pune Citizens checked their representative this month.",
    },
    { number: "100%", label: "Data sourced from ECI & Govt Gazettes." },
    {
      number: "5,000+",
      label: "Reports of Concern' sent to local offices via this portal.",
    },
  ];

  return (
    <section className="stats side-space">
      <h2 className="stats-title">Your trust isn't assumed, its earned</h2>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-item" key={index}>
            <p className="stat-number">{stat.number}</p>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
