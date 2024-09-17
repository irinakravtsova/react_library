import classNames from 'classnames';
import './FlexCard.css'
import FotoCard from '../../assets/Restonans/1.jpg'
import Rating from '../Rating/Rating'
import Button from '../Button/button'

function FlexCard(props) {
  
  return (  
    <div className="flexcard">
      <div className="container">
        <h2>Карточки</h2>
        <ul className="flexcard__grid">
          <li className="flexcard__item">
            <div className="flexcard__card-1">
              <h2 className='fixcard__card-title'>Карточка 1</h2>
              <p className="flexcard__desc">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vero ipsum optio quam nihil autem.
              </p>
              </div></li>
          <li className="flexcard__item">
          <div className="flexcard__card-2">
            <div className="flexcard__card-2-prew">
                Верхняя часть
            </div>
            <div className="flexcard__card-2-body">
              
              </div>
              <h2 className='fixcard__card-title'>Карточка 2</h2>
              <p className="flexcard__desc">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vero ipsum optio quam nihil autem.
              </p>
              </div></li>
          <li className="flexcard__item">Текст3</li>
          <li className="flexcard__item">Текст4</li>
        </ul>
      </div>
    </div> 
    

  )
}

export default FlexCard