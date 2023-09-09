import React from 'react';
import './Info.css'

const Info = ({ title, text }) => {
  return (
    <main>
      <h2>{title}</h2>
      <p>{text}</p>
    </main>
  );
};

export default Info;
