import React from 'react';

import bannerImg from '../../../../assets/banner.png';

import './Banners.css';

const Banner = () => {
  return (
      <img src={bannerImg} className="banner-img" alt="banner"/>
  );
};

export default Banner;
