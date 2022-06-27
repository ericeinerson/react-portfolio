import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {AiFillGithub} from "react-icons/ai"


function HeaderSocials() {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/eric-einerson/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/ericeinerson" target="_blank"><AiFillGithub /></a>
    </div>
  )
}

export default HeaderSocials