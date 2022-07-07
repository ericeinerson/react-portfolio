import React from 'react'
import "./about.css"
import ME from "../../Assets/self.jpeg"
import {BsPerson} from "react-icons/bs"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"



function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>

        <div className="about__content">

          <div className="about__cards">
            <article className="about__card">
              <BsPerson class="about__icon"/>
              <h5>Development Experience</h5>
              <small>Flatiron School Graduate</small>
            </article>

            <article className="about__card">
              <FiUsers class="about__icon"/>
              <h5>Non-Development Experience</h5>
              <small>Management, Education, Healthcare</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary class="about__icon"/>
              <h5>Projects</h5>
              <small>Project Count: 4</small>
            </article>
          </div>

          <p>
            I am fullstack developer with experience in frontend and backend design, 
            focusing on React.js, Node.js, and Ruby on Rails, as well as a background in 
            healthcare and education. I possess strong skills in leadership, teaching, and 
            problem solving, and I have a passion for continual learning. 
          </p>

          <a href="contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About