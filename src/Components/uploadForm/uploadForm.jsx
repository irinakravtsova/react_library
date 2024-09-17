import React from "react";
import InputMask from 'react-input-mask';
import { useState } from "react";

function UploadForm() {
  const [result, setResult] = React.useState("");
  

  const onSubmit = async (event) => {
    console.log('click');
    
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9574cfc8-9d2a-4105-bc08-1fbbb32f6f7e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert("Заявка успешно отправлена")
      // setResult("Заявка успешно отправлена");
      setResult('')
      setForm(initialState);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const initialState = {
    name: "",   
    phone: "",
    email: "",   
  };
 
  const [form, setForm] = useState(initialState);

  return (
    <div>
      
      <div className=" popup__content-footer" >
    
                    
        <div className="popup__wrapper footer__form__wrapper">
          <p className="footer-title popup-title">Записаться на первую<br></br> бесплатную консультацию</p>
        
        </div>  
        <span className="popup__subtitle footer-subtitle">{result}</span>      

        <form className="order__form" action=""
              method="post"  onSubmit={onSubmit}
            
               >
        
        
          <input 
          className="input footer-input"
          type="text"
          name="name"
          // value={form.name}        
          placeholder="Имя"
          required
          // autoComplete="off"
          // onChange={handleInputChange}
          />
   
          <input  
          className="input order__input footer-input"
          type="email"
          name="email"
       
          required
          placeholder="Email"
      
          />         
          

        <InputMask
          name="phone"
          // mask="+9 (999) - 999 - 99 - 99"
          // replacement={{ _: /\d/ }}
          className="input order__input footer-input"
          placeholder="Номер телефона"
          //  autoComplete="off"
          required        
        />      

          <button className="popup__btn-form footer-btn" type="submit" > Оставить заявку</button>
         
        </form>     

        <p className="popup__subtitle footer-subtitle" >Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности
        </p>  
     
     
     </div>

    </div>
    
    
  );
}


export default UploadForm;