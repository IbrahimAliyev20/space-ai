import React from "react";
import "./footer.css";
import { FaXTwitter } from "react-icons/fa6";
import { GiSoulVessel } from "react-icons/gi";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/logo.png" alt="Logo" className="footer-logo-img" />
        </div>
        <div className="footer-links">
          <a href="https://x.com/SPACE_AI1" target="_blank" rel="noopener noreferrer" className="footer-link">
          <FaXTwitter />
          </a>
          <a href="https://phantom.app" target="_blank" rel="noopener noreferrer" className="footer-link">
          <GiSoulVessel />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy;SPACE AI</p>
      </div>
    </footer>
  );
}
