import Grid from '../../../Grid/Grid'
import Title2 from '../../../Title/Title'

import './Catalog.css'

function Catalog() {


  return (
    <section className='catalog'>
      <div className="container catalog__container">
        < Title2 
        text = 'Каталог'
        cls = 'catalog__title'/>

        < Grid 
          cls = 'catalog__list'
          clsCard ='catalog__item'
          clsCardBig ='catalog__item catalog__item-big'
          clsCardArticl = 'catalog__card'
          cardDefolt = 'cardDefolt'
          cardBig = 'cardBig'

          />
   

      </div>

              
         
      

    

    </section>

  )
}

export default Catalog