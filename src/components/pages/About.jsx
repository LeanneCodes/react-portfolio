import React, { useState, useEffect } from 'react';
import Leanne from '../../assets/leanne-portfolio.png';
import Leanne2 from '../../assets/leanne-portfolio-portrait.png';
import '../styles/About.css'

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1500);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <div className='about-container container-fluid' id='about'>
        <div className='about-info'>
          <div className='img-style'>
            <img src={Leanne} alt='Leanne' className='profile-pic'/>
          </div>
          <div className='text-pos'>
            <h1 className='about-title'>About Me</h1>
            <p className='text-style'>
            During my career, I specialised in Addressable Advertising, building display ad banners for clients such as, Eurostar, Audible and Legoland. I discovered that I love transforming Figma and Photoshop designs into live ads using HTML, CSS, JavaScript and Greensock.
            <br/>
            <br/>
            To have a thorough understanding of Frontend Development, I completed two bootcamps. <a href='https://www.credential.net/abe70729-0419-4049-a752-62b032d231eb#gs.08qmqt' target='_blank' style={{color: 'var(--coral)'}}>Fullstack Merit Diploma</a> and <a href='#' target='_blank' style={{color: 'var(--coral)'}}>Frontend Development Certificate</a>.
            <br/>
            <br/>
            Now, I'm eager to transition into a full-time Frontend Developer role, collaborating with dedicated professionals and continuously learning and growing in this exciting tech world. I'm ready to bring my skills to innovative projects and stay ahead in this ever-evolving industry.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='about-container container-fluid' id='about'>
      <div className='about-info'>
        <div className='img-style'>
          <img src={Leanne2} alt='Leanne' className='profile-pic-portrait'/>
        </div>
        <div className='text-pos'>
          <h1 className='about-title'>About Me</h1>
          <p className='text-style'>
          During my career, I specialised in Addressable Advertising, building display ad banners for clients such as, Eurostar, Audible and Legoland. I discovered that I love transforming Figma and Photoshop designs into live ads using HTML, CSS, JavaScript and Greensock.
          <br/>
          <br/>
          To have a thorough understanding of Frontend Development, I completed two bootcamps. <a href='https://www.credential.net/abe70729-0419-4049-a752-62b032d231eb#gs.08qmqt' target='_blank' style={{color: 'var(--coral)'}}>Fullstack Merit Diploma</a> and Frontend Development Certificate pending.
          <br/>
          <br/>
          Now, I'm eager to transition into a full-time Frontend Developer role, collaborating with dedicated professionals and continuously learning and growing in this exciting tech world. I'm ready to bring my skills to innovative projects and stay ahead in this ever-evolving industry.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About