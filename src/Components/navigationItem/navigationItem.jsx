import React from 'react'


function NavigationItem({
  key,
  isClassLi, 
  isClassLink, 
  link, 
  text}) {
  return (
   
      <li className={isClassLi} key={key}>
        <a className={isClassLink} href={link}>{text}</a>
      </li>
     
  );
}

export default NavigationItem;