// подключить React-icons к проекту 
// https://react-icons.github.io/react-icons/
// npm install react-icons --save


import React from 'react';
import { AiFillCalculator } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";
import { BsArrowUpRightSquareFill } from "react-icons/bs";

import './IconsReact.css'

function IconsReact(props) {

  return (
    <>
    {/* стилизация пропсами: */}
    < AiFillCalculator size= '40' color='red'/>
    < IoIosMenu size= '40' color='green' />
    < BsArrowUpRightSquareFill size= '40' color='gray' />

    {/* стилизация с помощью css */}
    <ul className="iconreact__list">
     <li className="iconreact__item">
        < AiFillCalculator className='iconreact__icon'/>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi.</span>
     </li>
     <li className="iconreact__item">
         < IoIosMenu className='iconreact__icon' />
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi.</span>
     </li>
     <li className="iconreact__item">
       < BsArrowUpRightSquareFill className='iconreact__icon' />
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi.</span>
     </li>
    
    </ul>
    </> 
   

  )
}

export default IconsReact