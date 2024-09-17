import React from 'react'
import './BellButton.css'

function BellButton(props) {
  return (
    <button className='btn flash-btn'>{props.text}</button>
  );
}

export default BellButton;