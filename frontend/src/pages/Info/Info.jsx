import React from 'react';
import './Info.css'

const Info = ({ title, text }) => {
  return (
    <div className="info-page-wrapper">
      <h2 className="title">{title}</h2>
      {text}
    </div>
  );
};

export default Info;
