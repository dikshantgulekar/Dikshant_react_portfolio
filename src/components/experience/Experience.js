import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from "react-icons/bs";
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Experience() {
  return (
    <>
    <section id='skills'>
      <h5>WHAT SKILLS I HAVE</h5>
      <h2>MY SKILLS</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
            <h3>FRONTEND & BACKEND</h3>
            <div className="experience__content"> 
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>HTML5</h4>
                          <br/>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon"/>
                  <div>
                    <h4>CSS3</h4>
                            <br/>
                  </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon"/>
                  <div>
                    <h4>BOOTSTRAP</h4>
                            <br/>
                  </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>JAVASCRIPT</h4>
                        <br/>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>AJAX & JSON</h4>
                        <br/>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>JQUERY</h4>
                        <br/>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>REACT JS</h4>
                  <br/>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>NODE JS</h4>
                  <br/>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>EXPRESS JS</h4>
                  <br/>
                </div>
              </article> <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>MongoDB</h4>
                  <br/>
                </div>
              </article>

            </div>
        </div>
        {/* /////////////////////////////// */}
        <div className='experience__backend'>
        <h3>TOOLS </h3>
            <div className="experience__content"> 
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>POSTMAN</h4>
                  <br/>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>phpMyAdmin</h4>
                  <br/>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4> MUI & ANT</h4>
                  <br/>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>GITHUB</h4>
                  <br/>
                </div>
              </article>

            </div>
        </div>
      </div>
    </section>
    </>
  )
}
