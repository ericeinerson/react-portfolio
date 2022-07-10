import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from "../../Assets/self.jpeg"
import HeaderSocials from "./HeaderSocials"

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Eric Einerson</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <p>
            I am fullstack developer with experience in frontend and backend design, 
            focusing on React.js, Node.js, and Ruby on Rails, as well as a background in 
            healthcare and education. I possess strong skills in leadership, teaching, and 
            problem solving, and I have a passion for continual learning. 
        </p>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header