import React, {useState} from 'react';
import "./nav.css";
import {AiOutlineHome} from "react-icons/ai";
import {FcAbout} from "react-icons/fc";
import {BiBook} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";
import {BiMessageSquareDetail} from "react-icons/bi";
import ReactTooltip from "react-tooltip";

function Nav() {

  const [activeNav, setActiveNav] = useState("#")

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
        data-tip
        data-for="tooltip-top"
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
        data-tip
        data-for="tooltip-about"
      >
        <FcAbout />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
        data-tip
        data-for="tooltip-experience"
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
        data-tip
        data-for="tooltip-services"
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
        data-tip
        data-for="tooltip-contact"
      >
        <BiMessageSquareDetail />
      </a>
      <ReactTooltip id="tooltip-top" place="top" effect="solid">
        Top
      </ReactTooltip>
      <ReactTooltip id="tooltip-about" place="top" effect="solid">
        About
      </ReactTooltip>
      <ReactTooltip id="tooltip-experience" place="top" effect="solid">
        Experience
      </ReactTooltip>
      <ReactTooltip id="tooltip-services" place="top" effect="solid">
        Services
      </ReactTooltip>
      <ReactTooltip id="tooltip-contact" place="top" effect="solid">
        Contact
      </ReactTooltip>
    </nav>
  )
}

export default Nav