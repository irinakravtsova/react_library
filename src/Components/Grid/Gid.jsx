
import './Grid.css'
import FotoCard from '../../assets/Restonans/1.jpg'
import Rating from '../Rating/Rating'
import Button from '../Button/button'
import Card from '../Card/Card'

function Grid() {


  return (
   
    <ul className="cards-list">

      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card
      cls = 'card_promo' />
      </ul>
   

  )
}

export default Grid