import React from 'react'
import '../styles/Techstack.css'

const TechStack = (props) => {
  return (
    <div className='tech-container'>
      <div className='tech-icon'>{ props.image }</div>
      <p>{ props.name }</p>
    </div>
  )
}

export default TechStack