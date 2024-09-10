
import './Card.css'
import FotoCard from '../../assets/Restonans/1.jpg'
import Rating from '../Rating/Rating'
import Button from '../Button/button'

function Card(props) {

  return (      
    <li className="card  cards-list__item ">
      <img className="card__img" src={FotoCard} alt="Bon restaurant"/>
      <div className="card__body">
        <div className="card__price-rating">
            <strong class="card__price">5 000 руб</strong>
            < Rating />
        
        </div>
        <h3 className="card__title">Bon restaurant</h3>
        <span className="card__location">Париж, Франция</span>
       < Button />
    </div>
  </li>

  )
}

export default Card