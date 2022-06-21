import React from "react";
import "./Footer.css";
import Mulearn from "./assets/Mulearn.png";

const Footer = () => {
  return (
    <footer>
      <div class="footer-container">
        <div class="footer-top">
          <div class="fsection1">
            <div>
              <img src={Mulearn} alt="" class="footer-logo" />
            </div>

            <div class="footer-links">
              <a target="_blank"  rel="noreferrer" href="https://mulearn.org/careers">
                Careers
              </a>
              <a target="_blank" rel="noreferrer" href="https://gtechmulearn.medium.com/">
                Blog
              </a>
              <a target="_blank" rel="noreferrer" href="https://mulearn.org/events/">
                Events
              </a>
            </div>

            <div class="social-links">
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/gtechmulearn/">
                <span class="iconify" data-icon="mdi:instagram"></span>
              </a>
              <a target="_blank" rel="noreferrer" href="https://twitter.com/GtechMulearn">
                <span class="iconify" data-icon="mdi:twitter"></span>
              </a>
              <a
                target="_blank" rel="noreferrer"
                href="https://www.youtube.com/channel/UCuBrylE2ued66MJIMpuOSQg"
              >
                <span class="iconify" data-icon="mdi:youtube"></span>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/mulearn/"
              >
                <span class="iconify" data-icon="mdi:linkedin"></span>
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.facebook.com/gtechmulearn">
                <span class="iconify" data-icon="mdi:facebook"></span>
              </a>
            </div>
          </div>

          <div class="fsection2">
            <div class="newsletter">
              <p class="fheadingtext">Join Our Mailing List</p>
              <p class="fparagraph">
                Join Our Mailing List Be the first to know about upcoming coding
                workshops, new coding tools, and other Mulearn related news.
              </p>

              <div class="invite-container">
                <input type="email" placeholder="Enter your email" />
                <button>Join</button>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div class="address">
          Technopark, Kazhakkoottam, Trivandrum - 695581, Kerala, India
          <span class="mailus"> Contact Us: hi@mulearn.org </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
