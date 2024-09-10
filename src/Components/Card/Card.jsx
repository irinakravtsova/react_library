
import './Card.css'
import FotoCard from '../../assets/Restonans/1.jpg'
import Rating from '../Rating/Rating'
import Button from '../Button/button'

function Card(props) {

  return (  
     
    <article className="card  cards-list__item ">
      <img className="card__img" src={FotoCard} alt="Bon restaurant"/>
      <div className="card__body">
        <div className="card__body-top">
          <h3 className="card__title">Bon restaurant</h3>
            <strong class="card__price">5 000 руб</strong>
            {/* < Rating /> */}
        
        </div>
       
        {/* <span className="card__location">Париж, Франция</span> */}
       < Button 
              clsCard = "card__btn"
              btn = 'cardBtn' />
    </div>
  </article>


  )
}

export default Card