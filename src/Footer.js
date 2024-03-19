import React from "react";
import "./Footer.css";
import { FaEnvelopeOpenText, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer"> {/* Apply the 'footer' class here */}
      <div className="footer-content">
        {/* <h3>Food Junction</h3> */}
        <p>
          Designed and developed by<br />
          MITE CIVIL CONSULTANCY & MITE CSE DEPARTMENT
          <br />
          All Copyrights Reserved || 2023
        </p>
        <ul className="socials">
          <li>
            <a href="#">
              <FaInstagram size={30} color="#C13584" />
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedin size={30} color="#0077B5" />
            </a>
          </li>
          <li>
            <a href="#">
              <FaEnvelopeOpenText size={30} color="#DB4437" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
