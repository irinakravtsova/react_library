
import './Input.css'
import React from 'react';
import classNames from 'classnames';

function Input(props) {

  return (
    <>
    <input 
        type={props.type}
        className= {classNames('text-field', props.cls)}
    
        placeholder={props.placeholder}
         name="" 
         id="" />
    </>

  )
}

export default Input