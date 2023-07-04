import React from 'react';
import Imagebanner from '../assets/bannerHome.png'
import '../utils/style/banniereaccueil.css'

const BaniereAccueil = () => {
    return (
        <div className='Bannieraccueil'>
          <img className='banner_img' src={Imagebanner} alt="image paysage"/>
          <p className='textbanner'>Chez vous, partout et ailleurs</p>
        </div>
    );
};

export default BaniereAccueil;