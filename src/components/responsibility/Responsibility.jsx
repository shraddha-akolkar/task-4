import React from "react";
import "./Responsibility.css";
import img from "../../assets/images/earth.png";

const Responsibility = () => {
  return (
    <div className="section-space side-space">
      <div className="container">
        <div className="about-box">
          <div className="about-content">
            <h2>Our Nation, Our Responsibility</h2>

            <p>
              Integer at tincidunt dui, in tristique mauris. Suspendisse
              potenti. Vestibulum aliquam enim nec pretium pulvinar. Sed non
              sagittis enim, quis convallis ligula. Maecenas eleifend bibendum
              mollis. Integer pretium ligula ut rutrum vulputate. Donec
              sollicitudin feugiat dolor, et sollicitudin ligula scelerisque
              vel. Sed pellentesque dui ac diam tristique, in hendrerit ex
              hendrerit.
            </p>

            <p>
              Praesent in hendrerit purus, quis imperdiet neque. Donec felis
              dolor, hendrerit condimentum mauris eget, consectetur consequat
              ante. Maecenas ut eros dapibus, ullamcorper erat sit amet,
              molestie tellus. Vivamus libero lectus, lobortis non quam a,
              consectetur condimentum arcu. Curabitur eget commodo lacus, id
              placerat arcu.
            </p>

            <button className="about-btn">About Us</button>
          </div>

          <div className="about-image">
            <img src={img} alt="about" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Responsibility;
