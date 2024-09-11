import React from 'react';
import classNames from 'classnames';
import './Header.css'
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

function Header(props) {
  return (   
      <div className='header'>
        <div className="container header__container">
          <a className='header__logo'
            href="">
              < Logo
              cls = "header__logo"
               />
          </a>
          < Menu
          cls = 'header__menu'
          clsList = 'header__menu-list' />

        </div>

      </div>
  )
}


export default Header