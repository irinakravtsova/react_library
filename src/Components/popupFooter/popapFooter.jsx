import React from 'react'
import { useState } from 'react';
import InputMask from 'react-input-mask';
import './popupFooter.css'




function PopupFooter(props) {
  const initialState = {
    name: "",   
    phone: "",
    email: "",   
  };
 
  const [form, setForm] = useState(initialState);

  const [checked, setChecked] = useState(false);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleClick() {
    let error = formValidata();
    if (error === 0) {
      setForm(initialState);
      setChecked(false);
      alert("Заявка успешно отправлена");
    }
  }

  function formValidata() {
    let error = 0;
    if (
      !form.name ||     
      !form.phone ||
      !form.email 
    
    ) {
      error++;
      alert("Заполните пожалуйста все поля");
    } else if (!isValidEmail(form.email)) {
      error++;
      alert("Введи корректный Email");
    } 
    return error;
  }
  
  function isValidEmail(value) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(value);
  }

 

  return (
   
    <div>
      <div className=" popup__content-footer" >
    
                    
        <div className="popup__wrapper footer__form__wrapper">
          <p className="footer-title popup-title">Записаться на первую<br></br> бесплатную консультацию</p>
        
        </div>        

        <form className="order__form" action="/example/handler.php"
              method="post"
               onSubmit={handleInputChange}
         >
        
          <input 
          className="input footer-input"
          type="text"
          name="name"
          value={form.name}        
          placeholder="Имя"
          onChange={handleInputChange}/>
    
          <input  
          className="input order__input footer-input"
          type="email"
          name="email"
          value={form.email}
          pattern=".+@example\com"
          required
          placeholder="Email"
          onChange={handleInputChange}
          />

        <InputMask
          name="phone"
          value={form.phone}
           mask="+9 (999) - 999 - 99 - 99"
          replacement={{ _: /\d/ }}
          className="input order__input footer-input"
          placeholder="Номер телефона"
          onChange={handleInputChange}
        />
    
         

          <button className="popup__btn-form footer-btn" type="submit" onClick={handleClick}> Оставить заявку</button>
         
        </form> 

        <p className="popup__subtitle footer-subtitle" >Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности
        </p>
       
     
     
     </div>
  </div>



  );
}

export default PopupFooter;