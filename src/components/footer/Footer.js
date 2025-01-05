import React from 'react'
import './footer.css'
import { FaInstagramSquare } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer>
          <a href='#' className='footer__logo'> Dikshant Gulekar</a>
          <ul className='permalinks'>
              <li><a href='#'>HOME</a></li>
              <li><a href='#about'>ABOUT</a></li>
              <li><a href='#skills'>SKILLS</a></li>
              <li><a href='#portfolio'>PORTFOLIO</a></li>
              <li><a href='#contact'>CONTACT</a></li>
          </ul>

          <div className='footer__socials'>
              <a href='https://facebook.com'><CiFacebook /></a>
              <a href='https://instagram.com'><FaInstagramSquare /></a>
              <a href='https://twitter.com'><FaSquareXTwitter /></a>
          </div>

          <div className='footer__copyright'>
            <small>&copy; Dikshant Gulekar. All rights reserved.</small>
          </div>
      </footer>
    </>
  )
}
