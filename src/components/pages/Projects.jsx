import React from 'react'
import '../styles/Projects.css';
import Card from '../elements/Card';
import Oyster from "../../assets/oyster-and-beyond-project-cover.png"
import VaultKey from '../../assets/vaultkey-project-cover.png';

const Projects = () => {
  return (
    <div className='projects-container container-fluid' id="projects">
      <h1>My Projects</h1>
      <div className='projects'>
        <div className='projects-card'>
          <Card
            img={ Oyster }
            name="Oyster & Beyond Blog"
            tech="HTML, NextJs, Tailwind, JavaScript, Hygraph CMS"
            summary="A travel blog that showcases a variety of destinations and an option for users to leave comments."
            link1="https://oyster-and-beyond-blog.vercel.app/"
            link2="https://github.com/LeanneCodes/oyster-and-beyond-blog"
          />
        </div>
      </div>
    </div>
  )
}

export default Projects