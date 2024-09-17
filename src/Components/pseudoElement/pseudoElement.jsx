import React from 'react';

import './pseudoElement.css'
import Image from '../../assets/фото5.svg'

function PseudoElement(props) {

  return (
    <>
       <p className='warning'>Информация</p>

        <p className='warning__badge'>Бейдж</p>

        <p className='icon'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, necessitatibus dolor fugit quasi sed sint iste aspernatur. Voluptatibus praesentium autem possimus. Dolores labore iure mollitia natus. Eaque quisquam labore eligendi!</p>

        <p className='icon_left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, necessitatibus dolor fugit quasi sed sint iste aspernatur. Voluptatibus praesentium autem possimus. Dolores labore iure mollitia natus. Eaque quisquam labore eligendi!</p>

        <div className="card" data-badge = "Редкий вид">
          <img className='card__img' src={Image} alt="" />
          <div className="card__body">
            <a className='card__link' href="" >Текст ссылки</a>
            <p className="card__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, non eveniet. Nesciunt aliquam, vero quasi numquam autem molestiae ipsa magni ad mollitia eveniet ducimus velit eum hic veniam? Soluta, aliquam!
            </p>
          </div>
          </div>
          <div className="card" data-badge = "Скидка">
          <img className='card__img' src={Image} alt="" />
          <div className="card__body">
            <a className='card__link' href="" >Текст ссылки</a>
            <p className="card__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, non eveniet. Nesciunt aliquam, vero quasi numquam autem molestiae ipsa magni ad mollitia eveniet ducimus velit eum hic veniam? Soluta, aliquam!
            </p>
          </div>
          </div>
          <div className="card" data-badge = "Акция">
          <img className='card__img' src={Image} alt="" />
          <div className="card__body">
            <a className='card__link' href="" >Текст ссылки</a>
            <p className="card__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, non eveniet. Nesciunt aliquam, vero quasi numquam autem molestiae ipsa magni ad mollitia eveniet ducimus velit eum hic veniam? Soluta, aliquam!
            </p>
          </div>
        </div>
       <p className='text'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, sint! Voluptatum ipsa, quaerat reprehenderit adipisci tenetur eligendi atque accusantium iste esse dicta quos earum, sequi debitis ipsam ex, nam cumque.
       </p>
       {/* позиционирование абсолют и релейтив */}
       <div className="position">
       <h3>Привет</h3>
       <div className="box">
        <div className="child"></div>
       </div>
     
      

       </div>

    </>



  )
}



export default PseudoElement