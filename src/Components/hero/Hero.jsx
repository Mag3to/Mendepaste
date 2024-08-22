import React from 'react'
import './hero.css'
import hero_image from '../Assets/mendepaste-2.png'
import arrow_icon from '../Assets/arrow.png'
import { Link } from 'react-router-dom'



const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>Welcome to Mendepaste- Your Solution to Pest Control</h2>
            <h3>Mende Pest Solutions, the ultimate solution for a pest-free living! We take great pride in our ability to eradicate pests and restore peace to your living spaces.
            </h3>
            <p>MENDE PASTE</p>
            <div className="hero-latest-btn">
                <Link to="/Services" style={{textDecoration: 'none', display: 'flex', gap: '7px', color: 'white'}}>
                <div>Our Services</div>
                <img src={arrow_icon} alt="" />
                </Link>
                
            </div>
        </div>
       
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero