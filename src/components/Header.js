
import React from 'react'
import logorouge from '../assets/logorouge.png'
import '../utils/style/header.css'

import { Link } from 'react-router-dom'



function Header() {
  
return (
  <header className='header_container'>
    <figure>
      <img className='logo' src={logorouge} alt="logo kasa"/>
   </figure>
   <nav className='navbar'>
      
            <Link className="nav" to="/">Accueil</Link>
         
     
            <Link className="nav" to="/about">À propos</Link>
        
    </nav>
    
  </header>
)
}
export default Header