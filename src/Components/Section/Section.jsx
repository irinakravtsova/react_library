import React from 'react';
import './Section.css'
import FotoSection from '../../assets/фото5.svg'



function Section(props) {
  return ( 
    <section className='section' id=''>
      <div className="section__img">
        <img src={FotoSection} alt="" />
      </div>
      <div className="section__content">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta iure dolorum officia! Repellat commodi aliquid tempore officiis aliquam, dolor magni expedita ullam illo doloribus iusto.</p>
        <a href="#product">
          <button className='section__btn'>Заказать сейчас</button>
        </a>

      </div>

    </section>  
     
  )
}


export default Section