import React from "react";
import BannerHome from "../../assets/bannerHome.png";

import "./BanniereAccueil.css";

const BanniereAccueil = () => {
  return (
    <div className="banner">
      <img
        className="banner_img"
        src={BannerHome}
        alt="Chez vous, partout et ailleurs"
      />
      <h2 className="banner_title">Chez vous, partout et ailleurs</h2>
    </div>
  );
};
export default BanniereAccueil;
