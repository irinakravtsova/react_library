import classNames from 'classnames';
import './Card.css'
import FotoCard from '../../assets/Restonans/1.jpg'
import Rating from '../Rating/Rating'
import Button from '../Button/button'

function Card(props) {
  if (props.cardDefolt ==='cardDefolt') {
    return (
      <article className= {classNames("card  cards-list__item", props.clsCardArticl)}>
      <img className="card__img " src={FotoCard} alt="Bon restaurant"/>
      <div className="card__body ">
        <div className="card__body-top">
          <h3 className="card__title">Bon restaurant</h3>
            <strong class="card__price  ">5 000 руб</strong>
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
  // if (props.btn ==='formBtn') {
  //   return (
  //     <>
  //     <button className={classNames("btn defolt-btn", props.clsForm)}
  //             type= {props.type}>{props.textForm}</button> 
  //     {/* <a className="btn defolt-btn defolt-btn_link" href=''>отправить</a> */}
  //     </>
  
  //   )
  // }

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