
import './Menu.css'


function Menu() {
  return (
    
    <nav
      className='menu'
    >
      <ul className='menu__list'>
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