import React from 'react'
import './navigationSite.css'
import NavigationItem from '../navigationItem/navigationItem'

const navItems = [
  { id: 1,
    text: "Обо мне",
    link: '#about'
  },
  { id: 2 ,
    text: "Услуги",
    link: '#services'
  },
  {id:3,
    text: "Контакты",
    link: '#contacts'
  }
 
]

function NavigationSite() {
  return (
    <ul className='nav__list' >
      { navItems.map(navItem => (
        < NavigationItem
            key = {navItem.key}
            text = {navItem.text}
            link = {navItem.link}
            isClassLi = {'nav__item'}
            isClassLink = {'nav__link'} />
      ))}
    </ul> 
   
             
  );
}

export default NavigationSite;