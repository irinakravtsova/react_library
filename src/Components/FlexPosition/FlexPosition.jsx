import React from 'react';

import './FlexPosition.css'

function FlexPosition(props) {


  return (
<section>
  <div className="container">
    <div className="wrap">
      <div className="left">
        <div className="flexposition__card flexposition__card-left">
          <div className="flexposition__card_wrap">
              <h2 className='flexposition__title'>Заголовок карточки</h2>
              <p className='flexposition__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos modi non magni </p>
          </div>         
        </div>       
      </div>

      <div className="right">
     
        <div className="flexposition__card flexposition__card-right-top">
          <div className="flexposition__card_wrap">
            <h2 className='flexposition__title'>Заголовок карточки</h2>
            <p className='flexposition__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos modi non magni veritatis exercitationem, provident molestiae sint error cum cupiditate blanditiis aliquam deleniti libero fugiat voluptatum corporis necessitatibus nihil saepe?</p>
          </div>
         
        </div>
          
        <div className="flexposition__card flexposition__card-right-bottom">
          <div className="flexposition__card_wrap">
              <h2 className='flexposition__title'>Заголовок карточки</h2>
              <p className='flexposition__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
         
        </div>
      </div>
      </div>
    </div>

</section>

  )
}


export default FlexPosition