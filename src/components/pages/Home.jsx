import React from 'react'
import { RxOpenInNewWindow } from "react-icons/rx";
import '../styles/Home.css'
import Resume from '../../../public/Leanne-Goldsmith-Resume.pdf'

const Home = () => {
  return (
    <div className='intro-container container-fluid'>
      <h1 style={{fontFamily: 'var(--title)', fontSize: '7rem'}}>Leanne<br />Goldsmith</h1>
      <p style={{color: 'white'}}>
      Certified Fullstack Engineer with a Merit Diploma, passionate about Frontend development.
      </p>
      <div className='intro-links'>
        <button type='button'><a href={Resume} target='_blank' rel="noopener noreferrer">Resume {<RxOpenInNewWindow />}</a></button>
      </div>
    </div>
  )
}

export default Home