import React from "react";
import image1 from "../assets/pexels-pixabay-264636.jpg"
import '../styles/Discover.css'

const Discover = () => {
  return (
    <div className="discover-container">
      <div className="discover-section">
        <h1>Discover a MetroMart Supermarket Near You</h1>
        <p>
          With nine stores throughout India, MetroMart<br/> is proud to bring you a
          diverse and convenient selection of <br/>high quality products right at your
          fingertips.
        </p>
        <button>FIND A STORE</button>
      </div>
      <div className="image-section"><img src={image1}/></div>
    </div>
  );
};

export default Discover;
