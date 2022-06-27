import React from 'react'
import "./services.css"
import {AiFillCheckCircle} from "react-icons/ai"

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiFillCheckCircle className="service__list-icon" />
              <p>Service #1</p>
            </li>
            <li>
              <AiFillCheckCircle className="service__list-icon" />
              <p>Service #2</p>
            </li>
            <li>
              <AiFillCheckCircle className="service__list-icon" />
              <p>Service #3</p>
            </li>
            <li>
              <AiFillCheckCircle className="service__list-icon" />
              <p>Service #4</p>
            </li>
            <li>
              <AiFillCheckCircle className="service__list-icon" />
              <p>Service #5</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiFillCheckCircle className="service__list-icon" />
              <p>Service #1</p>
            </li>
            <li>
              <AiFillCheckCircle className="service__list-icon" />
              <p>Service #2</p>
            </li>
            <li>
              <AiFillCheckCircle className="service__list-icon" />
              <p>Service #3</p>
            </li>
            <li>
              <AiFillCheckCircle className="service__list-icon" />
              <p>Service #4</p>
            </li>
            <li>
              <AiFillCheckCircle className="service__list-icon" />
              <p>Service #5</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiFillCheckCircle className="service__list-icon" />
              <p>Service #1</p>
            </li>
            <li>
              <AiFillCheckCircle className="service__list-icon" />
              <p>Service #2</p>
            </li>
            <li>
              <AiFillCheckCircle className="service__list-icon" />
              <p>Service #3</p>
            </li>
            <li>
              <AiFillCheckCircle className="service__list-icon" />
              <p>Service #4</p>
            </li>
            <li>
              <AiFillCheckCircle className="service__list-icon" />
              <p>Service #5</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services