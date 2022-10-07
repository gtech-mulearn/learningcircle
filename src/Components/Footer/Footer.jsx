import React from "react";
import "./Footer.css";
import Mulearn from "./assets/µLearn.png";

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
              <a
                href="https://mulearn.org/careers"
                target="_blank"
                rel="noopener noreferrer"
              >
                Careers
              </a>
              <a
                href="https://gtechmulearn.medium.com/"
                target="_blank"
                rel="noreferrer"
              >
                Blog
              </a>
              {/* <a href="https://mulearn.org/">Events</a> */}
            </div>

            <div class="social-links">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/gtechmulearn/"
              >
                <img
                  src="/assets/footer/instagram.png"
                  alt=""
                  className="fsociallinks"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/GtechMulearn"
              >
                <img
                  src="/assets/footer/twitter.png"
                  alt=""
                  className="fsociallinks"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/channel/UCuBrylE2ued66MJIMpuOSQg"
              >
                <img
                  src="/assets/footer/youtube.png"
                  alt=""
                  className="fsociallinks"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/mulearn/"
              >
                <img
                  src="/assets/footer/linkedin.png"
                  alt=""
                  className="fsociallinks"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/gtechmulearn"
              >
                <img
                  src="/assets/footer/facebook.png"
                  alt=""
                  className="fsociallinks"
                />
              </a>
            </div>
          </div>

          <div class="fsection2">
            <div class="newsletter">
              <p class="fheadingtext">Join Our Mailing List</p>
              <p class="fparagraph">
                Join Our Mailing List Be the first to know about upcoming coding
                workshops, new coding tools, and other µLearn related news.
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
