import React from 'react'
import './portfolionav.css'


export default function PortfolioNav({ setFilter }) {
  return (

    <>
       <div className="portfolioNav">
        <div className='portfolioBtn'>
          <button className='project-btn' onClick={() => setFilter('ALL')}>ALL</button>
          <button className='project-btn' onClick={() => setFilter('HTML')}>HTML5 & CSS3</button>
          <button className='project-btn' onClick={() => setFilter('JS')}>JavaScript</button>
          <button className='project-btn' onClick={() => setFilter('AJAX')}>AJAX & JSON</button>
          <button className='project-btn' onClick={() => setFilter('REACT')}>REACT & REDUX</button>
          <button className='project-btn' onClick={() => setFilter('NODE')}>NODE & EXPRESS</button>
          <button className='project-btn' onClick={() => setFilter('MERN')}>MERN</button>
        </div>
      </div>
    </>
  )
}

