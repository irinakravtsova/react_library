
import Button from '../../../Button/button'
import Link from '../../../Link/Link'
import './Hero.css'

function Hero() {


  return (
    <section className='hero'>
      <div className="container hero__container">
        <div className="hero__content">
          <h1 className='hero__title'>
              Магазин велосипедов с&nbsp;самой быстрой доставкой
          </h1>
          <p className="hero__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit  
             < Link  text = '  каску'/>
          </p>
          < Button textForm = 'Выбрать велосипед'
                    btn = 'formBtn'/>
        </div>

      </div>

    </section>

  )
}

export default Hero