import React from "react";
import "./Footer.scss";
import { Link } from 'react-router-dom';
const emailAddress = 'modisaurabh79@gmail.com';
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
          Discover the latest trends on SMG Hub, where timeless elegance meets contemporary style. Elevate your wardrobe with curated pieces that exude sophistication and versatility, ensuring you're always in vogue. From classic neutrals to statement accessories, find your perfect fashion must-haves here.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            <p>A-319, BMSIT, Bangalore-560064</p>
            <p>+91 9723471941</p>
            <p><Link to={`mailto:${emailAddress}`}>{emailAddress}</Link></p>
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">SMG hub</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
