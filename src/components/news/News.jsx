import React from "react";
import youtube from "../../assets/images/youutube.png";
import "./News.css";

const NewsData = [
  {
    label: "25 March 2026",
    des: "Distribution of technology-based assistive devices for the disabled under CSR in collaboration with Pune Municipal Corporation",
  },
  {
    label: "14 April 2026",
    des: "Organization of free health check-up camps in rural areas to promote community well-being.",
  },
  {
    label: "30 May 2026",
    des: "Launch of environmental awareness workshops in schools to encourage sustainable practices.",
  },
  {
    label: "10 June 2026",
    des: "Implementation of skill development programs for underprivileged youth in partnership with local NGOs.",
  },
];

const News = () => {
  return (
    <div className="news-section container section-space ">
      <div className="row-news d-flex">
        <div className="col-lg-6 left-section">
          <h3 className="mb-4">News / Press Release</h3>

          {NewsData.map((item, index) => (
            <div key={index} className="news-card mb-3 p-3">
              <p className="mb-1">{item.label}</p>
              <h6 className="mb-0">{item.des}</h6>
            </div>
          ))}
        </div>

        <div className="col-lg-6">
          <h3 className="mb-4">Spotlight</h3>

          <div className="spotlight-card position-relative">
            <img src={youtube} alt="video" className="img-fluid w-100" />

            {/* <div className="play-btn">
              ▶
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
