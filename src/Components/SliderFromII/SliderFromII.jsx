import React, { useState } from 'react';
import './SliderFromII.css'
import FotoCard from '../../assets/Restonans/1.jpg'
import foto1 from '../../assets/фото5.svg'
import foto2 from '../../assets/hero-photo.png'
import foto3 from '../../assets/Component.jpg'


const slides = [
  {
      id: 1,
      title: 'Слайд 1',
      text: 'Описание первого слайда.',
      img: FotoCard, // Используйте путь к вашему изображению
      link: '#link1'
  },
  {
      id: 2,
      title: 'Слайд 2',
      text: 'Описание второго слайда.',
      img: foto1,
      link: '#link2'
  },
  {
      id: 3,
      title: 'Слайд 3',
      text: 'Описание третьего слайда.',
      img: foto2,
      link: '#link3'
  },
  {
      id: 4,
      title: 'Слайд 4',
      text: 'Описание четвертого слайда.',
      img: foto3,
      link: '#link4'
  }
];


 

function SliderFromII(props) { 
  const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

  return (
    <div className="slider">
    <h2>Мой вклад</h2>
    <div className="slides">
        {slides.map((slide, index) => (
            <div
                key={slide.id}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
            >
                <img src={slide.img} alt={slide.title} />
                <p>{slide.text}</p>
                <a href={slide.link}>Узнать больше</a>
            </div>
        ))}
    </div>
    <button className="prev" onClick={prevSlide}>&#10094;</button>
    <button className="next" onClick={nextSlide}>&#10095;</button>
</div>
);
};


export default SliderFromII