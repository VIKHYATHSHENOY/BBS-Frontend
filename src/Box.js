// Box.js
import React from 'react';
import './Box.css'; // Import the CSS file

const Box = ({ text, imageUrl }) => {
  return (
    <div className="box-container">
      <div className="oval-container">
        <img src={imageUrl} alt="Box Image" className="box-image" />
      </div>
      <p className="box-text">{text}</p>
    </div>
  );
};

export default Box;
