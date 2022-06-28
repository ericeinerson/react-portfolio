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
        <div className="about__me-image">
          <img src={ME} alt="About Image"/>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about_card">
              <BsPerson class="about__icon"/>
              <h5>Development Experience</h5>
              <small>0 Years Working</small>
            </article>

            <article className="about_card">
              <FiUsers class="about__icon"/>
              <h5>Non-Development Experience</h5>
              <small>14 Years Working</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary class="about__icon"/>
              <h5>Projects</h5>
              <small>Project Count: 3</small>
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