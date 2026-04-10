import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer side-space">
      <div className="footer-container">
        {/* TOP SECTION */}
        <h2 className="footer-title">MyJansevak</h2>
        <p className="footer-desc">
          Duis efficitur leo congue est malesuada, et tempus enim tempus.
          Vestibulum maximus sodales neque id vulputate. Praesent vitae aliquam
          velit. Sed mauris eros, congue ac efficitur nec, pellentesque ac
          massa. Morbi eleifend augue sem, sit amet tincidunt enim viverra sed.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos...
          <span className="read-more"> Read More</span>
        </p>

        {/* NEWSLETTER */}
        <div className="newsletter">
          <div>
            <h3>Newsletter</h3>
            <p>Be the first one to know latest news and updates</p>
          </div>

          <div className="newsletter-input">
            <input type="text" placeholder="Enter your email" />
            <button>Submit</button>
          </div>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <div>
            <h4>About</h4>
            <ul>
              <li>About Us</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>News</li>
              <li>In Press</li>
            </ul>
          </div>

          <div>
            <h4>Important Links</h4>
            <ul>
              <li>Gram Panchayat</li>
              <li>Zilla Parishad</li>
              <li>Panchayat Samiti</li>
              <li>Vidhan Sabha</li>
              <li>Loksabha</li>
            </ul>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>About Us</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Jobs</li>
              <li>In Press</li>
            </ul>
          </div>

          <div>
            <h4>Support</h4>
            <ul>
              <li>Contact Us</li>
              <li>Online Chat</li>
              <li>Whatsapp</li>
              <li>Telegram</li>
              <li>Ticketing</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>
            ©MyJansevak, 2026 All rights reserved. Powered by <b>Hats-Off</b>
          </p>
          <p>Privacy policy | Terms of use</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
