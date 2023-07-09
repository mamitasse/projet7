import React from 'react'
import BannerAbout from'../../assets/BannerAbout.png'
import LayoutAbout from '../../components/Layout';
import './About.css'
 


const About = () => {
    return (
        <main className='main_about'>
        <article className='banner'>
            <img className='banner_img' src={BannerAbout} alt="paysage montagne" />
        </article >
        <LayoutAbout/>
    </main>
  )

};

export default About;