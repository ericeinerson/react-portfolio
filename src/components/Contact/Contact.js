import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"
import {AiOutlineMail} from "react-icons/ai"
import {AiOutlineLinkedin} from "react-icons/ai"

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_547jw4w', 'template_a65gnwl', form.current, 'hFYbxIHZrTlsevgIW');

    e.target.reset();
  }

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>eaeiner@gmail.com</h5>
            <a href="mailto:eaeiner@gmail.com" target="_blank">Send an Email</a>
          </article>
          <article className='contact__option'>
            <AiOutlineLinkedin className="contact__option-icon"/>
            <h4>LinkedIn</h4>
            <h5>click</h5>
            <a href="https://www.linkedin.com/in/eric-einerson/" target="_blank">Send a LinkedIn Message</a>
          </article>
        </div>
        <form ref={form} className="email__form" onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;