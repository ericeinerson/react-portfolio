import React from 'react'
import "./footer.css"
import {AiOutlineInstagram} from "react-icons/ai"

function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'></a>

      <ul className='permalinks'>
        <li><a href="#"></a></li>
        <li><a href="#about"></a></li>
        <li><a href="#experience"></a></li>
        <li><a href="#services"></a></li>
        <li><a href="#portfolio"></a></li>
        <li><a href="#testimonials"></a></li>
        <li><a href="#contact"></a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://instagram"><AiOutlineInstagram /></a>
      </div>

      <div className='footer__copyright'>
        <small></small>
      </div>
    </footer>
  )
}

export default Footer