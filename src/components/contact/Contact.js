import React, { useRef } from 'react'
import './contact.css'
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import emailjs from 'emailjs-com'

export default function Contact() {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_dyio2ri', 'template_jd3qmub', form.current, {
        publicKey: 'wOuBTcEDj6waLG60N',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      e.target.reset();
      
  };
  return (
    <>
    <section id='contact'>
      <h5>GET IN TOUCH</h5>
      <h2>CONTACT US</h2>

      <div className='container conatact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>EMAIL</h4>
            <h5>gulekar.dikshant@gmail.com</h5>
            <a href='mailto:gulekar.dikshant@gmail.com' target='_blank'>SEND MSG</a>
          </article>

          <article className='contact__option'>
            <FaLinkedin className='contact__option-icon'/>
            <h4>LINKED IN</h4>
            <h5>https://www.linkedin.com/in/dikshant-gulekar/</h5>
            <a href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile' target='_blank' >SEND MSG</a>
          </article>

          <article className='contact__option'>
          <FaSquareWhatsapp className='contact__option-icon'/>
            <h4>WHATSAPP</h4>
            <h5>+91 9324037201</h5>
            <a href='https://api.whatsapp.com/send?phone=9324037201' target='_blank'>SEND MSG</a>
          </article>
        </div>
        {/* /////////////// EMAILJS.COM //////////// */}
        <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Enter Your Name' required/>
            <input type='email' name='email' placeholder='Enter Your Email' required/>
            <textarea name='message' rows="7" placeholder='Enter Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>SUBMIT</button>
        </form>
      </div>

      
    </section>
    </>
  )
}
