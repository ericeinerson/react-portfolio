import React from 'react'
import "./portfolio.css"
import IMG1 from "../../Assets/img1.jpg"
import IMG2 from "../../Assets/img2.jpg"
import IMG3 from "../../Assets/img3.jpg"
import IMG4 from "../../Assets/img4.jpg"
import IMG5 from "../../Assets/img5.jpg"
import IMG6 from "../../Assets/img6.jpg"

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Coding-Module-Maker",
    language: "React.js and Ruby",
    description: "This app allows one to make small modules that include a language, arbitrary difficulty, and description. The app additionally includes a term bank and auth login page.",
    github: "https://github.com/ericeinerson/eduhub",
    demo: "Need to complete"
  },
  {
    id: 2,
    image: IMG2,
    title: "CryptoDev",
    language: "React.js and Ruby",
    description: "This app serves as a Reddit clone, where users can login, view forums, and make comments/posts related to cryptocurrency.",
    github: "https://github.com/ericeinerson/CryptoDev",
    demo: "Need to complete"
  },
  {
    id: 3,
    image: IMG3,
    title: "Exercise App",
    language: "Vanilla JavaScript",
    description: "This app allows one to make small exercise routines using a vanilla javascript front-end. It comes with pre-selected default workouts on a JSON database file.",
    github: "https://github.com/ericeinerson/exercise",
    demo: "Need to complete"
  },
  {
    id: 4,
    image: IMG4,
    title: "Colorado 14ers App",
    language: "React.js",
    description: "This app describes several 14ers within the state of Colorado. It uses CRUD to allow users to access the 14ers' information from a JSON database file, create new 14ers, and delete 14ers from the database as well.",
    github: "https://github.com/ericeinerson/1414ers",
    demo: "Need to complete"
  },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: "Wayfinder App",
  //   src: "https://github.com/ericeinerson/1414ers",
  //   demo: "Need to complete"
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: "Data Structure App (In Progress)",
  //   src: "https://github.com/ericeinerson/",
  //   demo: "Need to complete"
  // },
]
function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title,language, description, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title}/>
                </div>
                <div className="project__title">
                  <h3>{title}</h3>
                </div>
                <div className="project__language">
                  <h3>{language}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target="_blank">Github</a>
                  </div>
                  {/* <a href={demo} className='btn btn-primary' target="_blank">Github Demo (Need to Add)</a> */}
                </div>
                <div className="project__description">
                  <p>{description}</p>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio