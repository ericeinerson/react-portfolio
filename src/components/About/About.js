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
              <h4>0 Years</h4>
            </article>

            <article className="about__card">
              <FiUsers class="about__icon"/>
              <h5>Non-Development Experience</h5>
              <h4>14 Years</h4>
            </article>

            <article className="about__card">
              <VscFolderLibrary class="about__icon"/>
              <h5>Projects</h5>
              <h4>Project Count: 3</h4>
            </article>
          </div>

          <p>
            Welcome to my page! I am fullstack developer with experience in front end and back end design, 
            including Ruby on Rails, SQL, JavaScript, Angular, and React, and a background in healthcare, 
            education and the biological sciences. I possess strong skills in leadership, teaching, 
            and complex problem solving, and I have a passion for continual learning, including 
            staying up to date with new technology. My strong work ethic, career longevity, 
            and extensive educational background would positively impact a company’s teamwork, productivity, 
            and versatility. 
          </p>

          <a href="contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About