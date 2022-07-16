import React, { useState } from 'react'
import "./about.css"
import ME from "../../Assets/self.jpeg"
import {BsPerson} from "react-icons/bs"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"



function About() {

  const [showExperience, setShowExperience] = useState(false);
  const [showOther, setShowOther] = useState(false);
  const [showProject, setShowProject] = useState(false);


  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <h3>Click To See More</h3>
          <div className="about__cards">
            <article
              className="about__card"
              onClick={() => setShowExperience(!showExperience)}
            >
              <BsPerson className="about__icon" />
              <h5>Development Experience</h5>
              {showExperience && <small>Flatiron School Graduate</small>}
            </article>

            <article
              className="about__card"
              onClick={() => setShowOther(!showOther)}
            >
              <FiUsers className="about__icon" />
              <h5>Other Experience</h5>
              {showOther && <small>Management, Education, Healthcare</small>}
            </article>

            <article
              className="about__card" onClick={() => setShowProject(!showProject)}>
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              {showProject && <small>Project Count: 4</small>}
            </article>
          </div>

          <a href="contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About