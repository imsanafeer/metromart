import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="duration">
        <div className="service service-1">
          <h1>9</h1>
          <h2>Years in India</h2>
          <p>Reliable service with bulk and wholesale orders since 2015</p>
        </div>
        <div className="service service-2">
          <h1>2,000+</h1>
          <h2>Products in the List</h2>
          <p>Supplying a wide range of products at great prices with fresh options</p>
        </div>
        <div className="service service-3">
          <h1>15,000+</h1>
          <h2>Happy Customers</h2>
          <p>A proven track record of happy customers shopping for all their grocery needs</p>
        </div>
      </div>
      <div className="cookie">
        <p>
          &copy;2024 MetroMart | Privacy Policy | Terms of Use | Cookies Policy
          | Website by Sanafeer
        </p>
      </div>
    </div>
  );
};

export default Footer;
