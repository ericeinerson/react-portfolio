import React from 'react'
import "./footer.css"
import {AiOutlineInstagram} from "react-icons/ai"
import {BsLinkedin} from "react-icons/bs"
import {AiFillGithub} from "react-icons/ai"
import {ImBlogger2} from "react-icons/im"





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
        <a href="https://instagram.com"><AiOutlineInstagram /></a>
        <a href="https://www.linkedin.com/in/eric-einerson/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/ericeinerson" target="_blank"><AiFillGithub /></a>   
        <a href="https://dev.to/ericeinerson" target="_blank"><ImBlogger2 /></a>     
      </div>

      <div className='footer__copyright'>
        <small></small>
      </div>
    </footer>
  )
}

export default Footer