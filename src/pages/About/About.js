import React from 'react'
import BannerAbout from'../../assets/BannerAbout.png'

import './About.css'
 


const About = () => {
    return (
        <main className='main_about'>
        <article className='banner'>
            <img className='banner_img' src={BannerAbout} alt="paysage montagne" />
        </article >
    </main>
  )

};

export default About;