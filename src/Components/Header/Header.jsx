import React from 'react';
import classNames from 'classnames';
import './Header.css'
import logo from '../../assets/logo.png'
import burger from '../../assets/Icon/burger.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

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
          < Menu
          cls = 'header__menu'
          clsList = 'header__menu-list' />

        <FontAwesomeIcon icon={faCoctail} />

          <div id='menu'>
            {/* <img src={burger} alt="" /> */}
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>


        </div>

      </div>
  )
}


export default Header