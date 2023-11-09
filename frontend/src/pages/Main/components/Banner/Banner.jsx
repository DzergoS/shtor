import React from 'react';
import {isMobile} from "utils/isMobile";

import banner from 'assets/banner.png';
import bannerMobile from 'assets/bannerMobile.png';

import './Banners.css';

const Banner = () => {
  return (
      <img src={isMobile ? bannerMobile : banner} className="banner-img" alt="banner"/>
  );
};

export default Banner;
