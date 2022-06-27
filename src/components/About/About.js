import React from 'react'
import "./about.css"
import ME from "../../Assets/self.jpeg"
import {GrUserWorker} from "react-icons/gr"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"



function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="About Image"/>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about_card">
              <GrUserWorker class="about__icon"/>
              <h5>Experience</h5>
              <small># Years Working</small>
            </article>

            <article className="about_card">
              <FiUsers class="about__icon"/>
              <h5>Clients</h5>
              <small># Clients</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary class="about__icon"/>
              <h5>Projects</h5>
              <small># Projects</small>
            </article>
          </div>

          <p>
            Check out my experience, clients, and projects!
          </p>

          <a href="contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About