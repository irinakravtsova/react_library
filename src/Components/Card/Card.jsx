
import './Card.css'
import FotoCard from '../../assets/Restonans/1.jpg'
import Rating from '../Rating/Rating'
import Button from '../Button/button'

function Card(props) {

  return (  
     
    <article className="card  cards-list__item card_big">
      <img className="card__img card__img_big" src={FotoCard} alt="Bon restaurant"/>
      <div className="card__body card__body_big">
        <div className="card__body-top">
          <h3 className="card__title">Bon restaurant</h3>
            <strong class="card__price  card__price_big">5 000 руб</strong>
            {/* < Rating /> */}
        
        </div>
       
        {/* <span className="card__location">Париж, Франция</span> */}
       < Button
              textCard = 'Купить'
              clsCard = "card__btn card__btn-big"
              btn = 'cardBtn'
               />
    </div>
  </article>


  )
}

export default Card