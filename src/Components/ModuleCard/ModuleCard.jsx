//выравнивание инлайновых документов

import React from 'react';
import './ModuleCard.css'

import FotoCard from '../../assets/Restonans/1.jpg'
import foto1 from '../../assets/фото5.svg'
import foto2 from '../../assets/hero-photo.png'
import foto3 from '../../assets/Component.jpg'
function ModuleCard(props) {
  

  return (
<section>
  <div className="container">
   <ul className="modulecards">
    <li className="modulecard">
      <div className="modulecard__img"
       style={{backgroundImage: `url(${FotoCard})`}}>
      </div>
      <div className="modulecard__wrap">
          <h2  className='modulecard__card-title'>Заголовок</h2>
          <ul className="module__card-temes">
            <li>Тема1</li>
            <li>Тема2</li>
            <li>Тема3</li>
          </ul>
          <span className='modulecard__number'>1</span>
      </div>
      
    </li>

    <li className="modulecard">
      <div className="modulecard__img"
      style={{backgroundImage: `url(${foto1})`}}>
      </div>
      <div className="modulecard__wrap">
          <h2  className='modulecard__card-title'>Заголовок</h2>
          <ul className="module__card-temes">
            <li>Тема1</li>
            <li>Тема2</li>
            <li>Тема3</li>
            <li>Тема1</li>
            <li>Тема2</li>
            <li>Тема3</li>
            <li>Тема1</li>
            <li>Тема2</li>
            <li>Тема3</li>
          </ul>
          <span className='modulecard__number'>1</span>
      </div>
    </li>

    <li className="modulecard">
      <div className="modulecard__img"
       style={{backgroundImage: `url(${foto2})`}}>
      </div>
      <div className="modulecard__wrap">
          <h2  className='modulecard__card-title'>Заголовок</h2>
          <ul className="module__card-temes">
            <li>Тема1</li>
            <li>Тема2</li>
            <li>Тема3</li>
          </ul>
          <span className='modulecard__number'>1</span>
      </div>

    </li>

    <li className="modulecard">
      <div className="modulecard__img"
       style={{backgroundImage: `url(${foto3})`}}>
      </div>
      <div className="modulecard__wrap">
          <h2  className='modulecard__card-title'>Заголовок</h2>
          <ul className="module__card-temes">
            <li>Тема1</li>
            <li>Тема2</li>
            <li>Тема3</li>
          </ul>
          <span className='modulecard__number'>1</span>
      </div>
    </li>

   </ul>
   <div className="modulecard__btn-center">
    <button className='modulecard__btn'>Показать ещё</button>
   </div>
    </div>

</section>

  )
}


export default ModuleCard