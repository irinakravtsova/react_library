
import Button from '../Button/button'
import Input from '../Input/Input'
import './Form.css'


function Form() {
  return (
   <form 
      className='callback-form'
      action="">
        < Input 
        type = 'tel'
        name = 'tel'
        cls = 'callback-form__inp'
        placeholder = "Телефон"/>

        < Button 
        type = 'submit'
        cls = 'callback-form__btn'/>
      </form> 
    
   
  )
}

export default Form