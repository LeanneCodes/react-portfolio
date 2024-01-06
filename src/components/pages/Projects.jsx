import React from 'react'
import '../styles/Projects.css';
import Card from '../elements/Card';
import projectsData from '../../projects.json';

const Projects = () => {
  return (
    <div className='projects-container container-fluid' id="projects">
      <h1>My Projects</h1>
      <div className='projects'>
        <div className='projects-card'>
          {projectsData.map((project) => (
            <Card
              id={project.id}
              key={project.id}
              image={project.image}
              name={project.name}
              tech={project.tech}
              summary={project.summary}
              live={project.live}
              github={project.github}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects