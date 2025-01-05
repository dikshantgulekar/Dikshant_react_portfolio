import React from 'react'
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi"

export default function Headersocial() {
  return (
    <>
        <div className='header__socials'>
            <a href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile' target='_blank'><IoLogoLinkedin /></a>
            <a href='https://github.com/dikshantgulekar' target='_blank'><FaGithub /></a>
            <a href='https://gmail.com' target='_blank'><BiLogoGmail /></a>
        </div>
    </>
  )
}
