import React from 'react'
import '../styles/Card.css';

const Card = (props) => {
  return (
    <>
      <div className='project-card'>
        <div className='project-image'>
          <img src={props.image} alt="project-image" />
        </div>
        <div className='project-content'>
          <div className='project-info'>
            <h4>{props.name}</h4>
            <h5>{props.tech}</h5>
            <p className='w-75 mx-auto'>{props.summary}</p>
            <button>{props.link}</button>
            <div className='project-link'>
              <a href={props.live} target="_blank">View Project</a>
              <a href={props.github} target="_blank">View GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card