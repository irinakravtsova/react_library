import React from 'react';
import classNames from 'classnames';
import './Header.css'
import logo from '../../assets/logo.png'
import burger from '../../assets/Icon/burger.svg'
import { IoIosMenu } from "react-icons/io";


import Menu from '../Menu/Menu';

function Header(props) {
  return (   
      <div className='header'>
        <div className="container header__container">
          <a className='header__logo'
            href="">
               <img 
                  src={logo} 
                  alt="logo" 
                  // className=  'logo header__logo'
                  />
                <span> Ирина Кравцова</span>  
          </a>
          <div className="" id="header__burger">
            < IoIosMenu className='header__burger-icon' /> 
          </div>
          
          < Menu
          cls = 'header__navbar'
          clsList = 'header__navbar-list' />



        </div>

      </div>
  )
}


export default Header