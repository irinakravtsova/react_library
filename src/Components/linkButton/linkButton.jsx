import React from 'react'

function LinkButton(props) {
  return (
    <a href="https://www.b17.ru/courses/uverennoe_povedenie_forever/"
        target="_blank"    
       className={props.isClass}>
     
      {props.text}
    </a> 
  );
}

export default LinkButton;