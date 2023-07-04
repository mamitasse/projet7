import React from 'react';
import Imagebanner from '/Users/idiri/Desktop/Projet7/kasa/src/utils/style/'
import '../utils/style/src/utils/style/banniereaccueil.css'

const BaniereAccueil = () => {
    return (
        <div className='Bannieraccueil'>
          <img className='logo' src={Imagebanner} alt="logo kasa"/>
        </div>
    );
};

export default BaniereAccueil;