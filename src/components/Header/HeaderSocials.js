import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {AiFillGithub} from "react-icons/ai"
import {ImBlogger2} from "react-icons/im"



function HeaderSocials() {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/eric-einerson/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/ericeinerson" target="_blank"><AiFillGithub /></a>
        <a href="https://dev.to/ericeinerson" target="_blank"><ImBlogger2 /></a>
    </div>
  )
}

export default HeaderSocials