import classNames from 'classnames';
import './FlexCard.css'
import FotoCard from '../../assets/Restonans/1.jpg'


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
                 
            </div>
            <div className="flexcard__card-2-body">
               <h2 className='fixcard__card-title'>Карточка 2</h2>
              <p className="flexcard__desc-card-2">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vero ipsum optio quam nihil autem.
              </p>
            </div>              
          </div>
          </li>

          <li className="flexcard__item">
          <div className="flexcard__card-3">
            <div className="flexcard__card-3-prew">
               <img className='flexcard__card-3-img' src={FotoCard} alt="" /> 
            </div>
            <div className="flexcard__card-3-body">
               <h2 className='fixcard__card-title'>Карточка 3</h2>
              <p className="flexcard__desc-card-3">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vero ipsum optio quam nihil autem.
              </p>
            </div>              
          </div>
           
        </li>

        <li className="flexcard__item">
          <div className="flexcard__card-4">
            <div className="flexcard__card-4-top">
               <img className='flexcard__card-4-img' src={FotoCard} alt="" /> 
            </div>
            <div className="flexcard__card-4-battom">
               <h2 className='fixcard__card-title'>Карточка 3</h2>
              <p className="flexcard__desc-card-4">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vero ipsum optio quam nihil autem.
              </p>
            </div>              
          </div>
           
              </li>
          <li className="flexcard__item">Текст3</li>
          <li className="flexcard__item">Текст4</li>
        </ul>
      </div>
    </div> 
    

  )
}

export default FlexCard