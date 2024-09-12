import classNames from 'classnames';
import './Grid.css'
import FotoCard from '../../assets/Restonans/1.jpg'
import Rating from '../Rating/Rating'
import Button from '../Button/button'
import Card from '../Card/Card'

function Grid(props) {


  return (
   
    <ul className= {classNames("cards-list", props.cls)}>
      <li className= {props.clsCard}> 
        <Card cardDefolt= {props.cardDefolt}
               clsCardArticl = {props. clsCardArticl}/> </li>
      <li className= {props.clsCard}>
         <Card cardDefolt= {props.cardDefolt} clsCardArticl = {props. clsCardArticl}/> </li>
      <li className= {props.clsCardBig}>
         <Card cardBig = {props.cardBig}  /> </li>
      <li className= {props.clsCardBig}>
         <Card cardBig = {props.cardBig}/> </li>
      <li className= {props.clsCard}>
         <Card cardDefolt= {props.cardDefolt} clsCardArticl = {props. clsCardArticl}/> </li>
      <li className= {props.clsCard}> 
        <Card cardDefolt= {props.cardDefolt} clsCardArticl = {props. clsCardArticl} /> </li>
     
   
      </ul>
   

  )
}

export default Grid