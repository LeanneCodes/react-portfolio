import React from 'react'
import Techstack from '../elements/Techstack';
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiGreensock } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiVisualstudio } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import '../styles/Skills.css';

const Skills = () => {
  return (
    <div className='skills-container container-fluid' id='skills'>
      <div className='skills-header'>
        <h1>My Skills</h1>
        <p className="mx-auto" style={{ marginTop: '1rem', textAlign: 'center' }}>Current techstack that I engage with most frequently, either through my current role or via personal projects.</p>
      </div>
      <div className='skills-flex'>
        <div className='skills-Techstack grid-container'>
          <div className='grid-item'><Techstack image={<SiHtml5 />} name="HTML5"/></div>
          <div className='grid-item'><Techstack image={<SiCss3 />} name="CSS3"/></div>
          <div className='grid-item'><Techstack image={<SiTailwindcss />} name="Tailwind"/></div>
          <div className='grid-item'><Techstack image={<FaBootstrap />} name="Bootstrap"/></div>
          <div className='grid-item'><Techstack image={<SiJavascript />} name="JavaScript"/></div>
          <div className='grid-item'><Techstack image={<SiJquery />} name="jQuery"/></div>
          <div className='grid-item'><Techstack image={<FaNodeJs />} name="NodeJS"/></div>
          <div className='grid-item'><Techstack image={<TbApi />} name="API"/></div>
          <div className='grid-item'><Techstack image={<SiReact />} name="ReactJs"/></div>
          <div className='grid-item'><Techstack image={<TbBrandNextjs />} name="NextJs"/></div>
          <div className='grid-item'><Techstack image={<SiGreensock />} name="Greensock"/></div>
          <div className='grid-item'><Techstack image={<SiAdobephotoshop />} name="Photoshop"/></div>
          <div className='grid-item'><Techstack image={<SiFigma />} name="Figma"/></div>
          <div className='grid-item'><Techstack image={<SiGithub />} name="GitHub"/></div>
          <div className='grid-item'><Techstack image={<SiVisualstudio />} name="VS Code"/></div>
        </div>
      </div>
    </div>
  )
}

export default Skills