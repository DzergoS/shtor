import React from 'react';
import isMobile from "utils/isMobile";

import banner from 'assets/banner.png';
import bannerMobile from 'assets/bannerFullSize.jpg';

import './Banners.css';

const Banner = () => {
  return (
      <div className="banner__container">
        <img src={isMobile ? bannerMobile : banner} className="banner-img" alt="banner"/>
      </div>
  );
};

export default Banner;
