import React from "react";
import Image from "next/image";
import monkai from "../../../public/images/monkai_white.png";
import { FaTwitter, FaDiscord } from "react-icons/fa";

function index() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="flex-box">
          <img
            src="/images/monkai_white.png"
            alt="monkai"
            className="monkai-logo"
          />
        </div>
        <div className="footer-bottom">
          <div className="copyright">
            <p>MONKAI. All Rights Reserved</p>
          </div>

          <div className="social">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter color="#fff" className="social-icon" />
            </a>
            <a href="https://discord.com">
              <FaDiscord color="#fff" className="social-icon" />
            </a>
          </div>

          <div className="text">Los Angeles, California</div>
        </div>
      </div>
    </div>
  );
}

export default index;
