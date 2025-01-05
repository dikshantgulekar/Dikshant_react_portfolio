import React, { useState } from 'react'
import './nav.css'
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";
import { RiServiceFill } from "react-icons/ri";
import { BiSolidMessageDetail } from "react-icons/bi";
import { ImProfile } from "react-icons/im";

export default function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <>
      <nav>
        <a href='#' onClick={()=> setActiveNav('#')} className={activeNav == '#' ? 'active' : ''}><FaHome /></a>
        <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav == '#about' ? 'active' : ''}><FaUser /></a>
        <a href='#skills' onClick={()=> setActiveNav('#skills')} className={activeNav == '#skills' ? 'active' : ''}><MdLibraryBooks /></a>
        <a href='#portfolio' onClick={()=> setActiveNav('#portfolio')} className={activeNav == '#portfolio' ? 'active' : ''}><ImProfile/></a>
        <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav == '#contact' ? 'active' : ''}><BiSolidMessageDetail /></a>
      </nav>
    </>
  )
}
