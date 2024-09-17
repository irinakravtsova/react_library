import React from 'react'
import { useState } from 'react';
import '../section/Header/Header.css'
import Close from '../../assets/Close.svg'

function Burger(props) {
 

  return (
   
      <div className=" burger__content">
        <div className='burger__logo'>

        </div>
         <a className="logo-link logo-link-burger" href="#">
           <p className='logo__title logo-link-burger'>Юрий Михеев</p>
         </a> 
         <button className='burger-btn_open'
                 >
          <img src={Close} alt="Кнопка закрыть меню" />
         </button>
       
         <nav className="burger-nav"
              onClick={e => e.stopPropagation()}>
           <ul>
            <li>
             <a className="burger-nav__link" href="#about">обо мне</a>
            </li>  
            {/* <li>
             <a className="burger-nav__link" href="#projects">Проекты</a>
            </li>  */}
            <li>
             <a className="burger-nav__link" href="#services">Услуги</a>
            </li> 
            <li>
             <a className="burger-nav__link" href="#contacts">Контакты</a>
            </li>           
           </ul>
          </nav>
          <div className="js-burger__content burger__contact">
           <p className="burger__contact-title">для связи:</p>
           <ul className='burger__contacts-wrapper'>
             <li>
               <a className="burger__phone" href="https://api.whatsapp.com/send/?phone=79219925463&text&type=phone_number&app_absent=0" target="_blank">WhatsApp: <br></br>+7 921 992-54-63</a>
             </li>
             <li >
               <a className="burger__tg" href="https://t.me/Yuriy_Mikheev" target="_blank">@Yuriy_Mikheev</a>
             </li>
           </ul>
        
          </div>
       </div>




  );
}

export default Burger;