import React, { useState } from "react";
import './SliderScience.css'

import { IconButton } from "../IconButton/IconButton";


export const SliderScience = ({ data }) => {
  const [activeId, setActiveId] = useState(0)

  const prev = () => {
    setActiveId(activeId => {
      if (activeId > 0) {
        return activeId - 1
      }
      return activeId
    })
  }

  const next = () => {
    setActiveId(activeId => {
      if (activeId < data.length - 1) {
        return activeId + 1
      }
      return activeId
    })
  }

  return (
    <div className="science__inner">
      <div className="science__controls">
        <IconButton
          direction="left"
          onClick={prev}
          disable={activeId === 0}
        />
        <IconButton
          direction="right"
          onClick={next}
          disable={activeId === data.length - 1}
        />
      </div>

      <div className="slider__science">
         {data.map((slide, idx) => (
           <div
              className={`slide__science${idx === activeId ? ' active' : ''}`}>
             {/* <div className="science__box"> */}
                <a  className={`slide__science__link${idx === activeId ? ' active' : ''}`}
                
                  href={slide.link}
                  target="_blank">
                   <div className="science__slide">
                    <img 
                      className='science__image'
                       src={slide.img} alt={slide.alt} />
                    <div className="slide__info-science">
                       <h3 className='slide__title-science'>
                         {slide.text}
                         
                       </h3>
                    </div>

                   </div>
                 </a>
          
             {/* </div>
        */}
           </div>


      ))}

    </div>

      
      {/* <div className="slider">
        {data.map((slide, idx) => (
          <div
            className={`slide${idx === activeId ? ' active' : ''}`}
          >
            <div className="slide__info">
              <div className="slide__label">{slide.name}</div>
              <div className="slide__title">{slide.quote}</div>
            </div>
            <img src={slide.img} alt={`Slide ${idx + 1}`} />
          </div>
        ))}
      </div> */}
    </div>
  )
}
