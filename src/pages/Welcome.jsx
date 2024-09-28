import React, { useState } from "react";
// import { Header } from "../components/Header";
// import { AppLabel } from "../components/AppLabel";
// import { AppButton } from "../components/AppButton";
import { Header } from "../components/Header.jsx";
import { AppLabel } from "../components/AppLable.jsx"; // Убедитесь, что регистр совпадает
import { AppButton } from "../components/AppButton.jsx"; // Убедитесь, что регистр совпадает
// import AppButton from './path/to/AppButton';






const Welcome = () => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header headerType="h1" headerText="Салам" />
          <form className="welcome__form">
            <AppLabel 
              labelText="Ваше имя" 
              hasError={username.trim() === ""} 
              errorText="Введите имя в правильном формате" 
              id="username" 
              isRequired={true} 
              inputPlaceholder="Имя" 
              inputType="text"
              labelValue={username} 
              labelChange={setUsername} 
            />
            <AppLabel
              labelText="Ваш номер" 
              errorText="Введите номер в правильном формате"
              id="phone"
              hasError={phone.trim() === ""}
              isRequired={true}
              inputPlaceholder={"+998 9- --- -- --"}
              inputType="tel"
              labelValue={phone} 
              labelChange={setPhone} 
            />
            {/* <button type="submit" id="next-btn">
              Далее
            </button> */}
            {/* <AppButton buttonText="Далее" isDisabled={true}/> */}
            <AppButton buttonText="Далее" isDisabled={false} />

          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;



