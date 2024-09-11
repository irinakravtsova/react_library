import classNames from 'classnames';
import './Menu.css'


function Menu(props) {
  return (
    
    <nav
      className= {classNames("menu", props.cls)} 
    >
      <ul className= {classNames('menu__list', props.clsList)} >
        <li className='menu__item'>
          <a className='menu__link'
            href="">
              Каталог
            </a>
        </li>
        <li className='menu__item'>
          <a className='menu__link'
            href="">
              Новинки
            </a>
        </li>
        <li className='menu__item'>
          <a className='menu__link'
            href="">
              Заказать
            </a>
        </li>
        <li className='menu__item'>
          <a className='menu__link'
            href="">
              Контакты
            </a>
        </li>

      </ul>
    </nav>   
   
  )
}

export default Menu