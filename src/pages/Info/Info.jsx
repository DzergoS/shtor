import React from 'react';
import './Info.css'

const Info = ({ title, text }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{text}</p>
    </>
  );
};

export default Info;
