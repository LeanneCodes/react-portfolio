import React from 'react';
import '../styles/Icon.css';

const Icon = (props) => {
  return (
    <div>
      <div className='icon'>{ props.icon }</div>
    </div>
  )
}

export default Icon