import React, {useState} from 'react'
import ScrollIndicator from "../ScrollIndicator/ScrollIndicator"
import Header from "../Header/Header"
import Nav from "../Nav/Nav"
import About from "../About/About"
import Experience from "../Experience/Experience"
import Services from "../Services/Services"
import Portfolio from "../Portfolio/Portfolio"
import Testimonials from "../Testimonials/Testimonials"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"

function Display() {

    const [hidden, setHidden] = useState(true)
  return (
    <>
      <ScrollIndicator />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default Display