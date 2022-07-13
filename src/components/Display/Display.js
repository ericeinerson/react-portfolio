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

    const [scroll, setScroll] = useState(0);
    const [hidden, setHidden] = useState(false);

    const handleScroll = () => {
        let scrolled = document.documentElement.scrollTop;
        let maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrollPercent = (scrolled / maxHeight) * 100;
        setScroll(scrollPercent);

        if (scroll>50){
            setHidden(true);
        }
        else if (scroll<=50){
            setHidden(false);
        }
    }

    window.addEventListener("scroll", handleScroll);

  return (
    <>
      {!hidden && <ScrollIndicator scroll={scroll} />}
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