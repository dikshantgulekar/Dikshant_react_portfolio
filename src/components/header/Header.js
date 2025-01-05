import React from 'react'
import './header.css'
import Talk from './Talk'
import PROFILE from '../../assets/profileIMG.png'
import Headersocial from './Headersocial'

export default function Header() {
  return (
    <>
     <header>
        <div className='container header__container'>
            <h5>HELLO I'am</h5>
            <h1>DIKSHANT GULEKAR</h1>
            <h3 className='text-light'> MERN STACK DEVELOPER</h3>
            <Talk/>
            <Headersocial/>

            <div className='profile'>
               <img src={PROFILE} alt="myprofile" className='profile__img'/>
              
            </div>
            <a href='#about' className='scroll__down'>Scroll Down</a>
        </div>
     </header>
    </>
  )
}
