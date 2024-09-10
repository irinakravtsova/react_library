
import './Rating.css'
import StarYellow from '../../assets/Rating/star-yellow.svg'
import StarGay from '../../assets/Rating/star-gray.svg'

function Rating() {

  return (
 
    <div className="rating">
      <img className="rating__star" src={StarYellow}  alt="Рейтинг 4 из 5"/>
      <img className="rating__sta rating__star" src={StarYellow} alt=""/>
      <img className="rating__star rating__star" src={StarYellow}  alt=""/>
      <img className="rating__star rating__star" src={StarYellow}  alt=""/>
      <img className="rating__star" src={StarGay}  alt=""/>
   
    </div>
   
  )
} 

export default Rating