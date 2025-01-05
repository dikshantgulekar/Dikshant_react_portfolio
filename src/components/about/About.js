import React from 'react'
import './about.css'
import { FaLaptopCode } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import Talk from '../header/Talk';
import PROFILE from '../../assets/profileIMG.png'
// import PHOTO from '../../assets/netflix.jpg'

export default function About() {
  return (
    <>
      <section id='about'>
        <h5>GET TO KNOW</h5>
        <h2>ABOUT ME</h2>

        <div className='container about__container'>
          <div className='about__me'>
            <div className='about__me-image'>
              {/* <img src={PROFILE} alt='MY PROFILE'/> */}
              <img src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https%3A%2F%2Fdrive.google.com%2Ffile%2Fd%2F1_3ewEOQV0xBMq9JL_dJORA3mQSR7NeUC%2Fview%3Fusp%3Ddrive_link' alt='MY PROFILE'/>

              
            </div>
            <h2>SCAN FOR CV</h2>
          </div>

          <div className='about__content'>
            <div className='about_cards'>
            {/* <article className='about__card'>
              <FaFolderOpen className='about__icon'/>
                <h6>SCAN FOR CV</h6>
                <img src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https%3A%2F%2Fdrive.google.com%2Ffile%2Fd%2F1A48muVz7fEyhoQFSb3zitFDgCsT1kDKb%2Fview%3Fusp%3Ddrive_link' fluid/>
              </article> */}
              <article className='about__card'>
              <FaLaptopCode className='about__icon'/>
                <h4>LANGUAGE</h4>
                <small>8+</small>
              </article>
              <article className='about__card'>
              <FaFolderOpen className='about__icon'/>
                <h4>PROJECT</h4>
                <small>20+ COMPLETED</small>
              </article>
           
            </div>

            <p>
            Hello! I'm Dikshant, a MERN stack developer with a passion for creating visually stunning and functional web applications. I have a strong foundation in HTML5, CSS3, Bootstrap, JavaScript, Ajax, JSON, jQuery, Node.js, Express.js, React.js, MongoDB, and phpMyAdmin.
            <br/>
            I specialize in UI/UX design, using frameworks like Material UI (MUI), Ant Design, and React-Bootstrap to build responsive, user-friendly interfaces. With experience across these technologies, I deliver creative, seamless web experiences.
            <br/>
            I'm always eager to tackle new challenges and craft solutions that meet both user and business needs.

            </p>

            <Talk/>

            
          </div>
{/* 
          <div className='scanner__container'>
            <div className='scanner__img'>
                <h3>scanner</h3>
                <img src={PHOTO} alt='scanner' className='imageforscan'/>
            </div>
            <div className='scanner__text'>
                <h2>SCAN CODE TO</h2>
                <h2>DOWNLOAD MY</h2>
                <h2>RESUME</h2>
            </div>
          </div> */}


        </div>

     
      </section>
    </>
  )
}
