import React from 'react'
import './footer.css'
import footer_logo from '../Assets/mpslogo-2.png'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>MENDEPASTE</p>
        </div>
        <ul className="footer-links">
            <li>Services</li>
            <li>Products</li>
            <li>AboutUs</li>
            <li>ContactUs</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - by Amar Technologies</p>
        </div>
    </div>
  )
}

export default Footer