import React from "react";

export const AppLable = ()=> {
    return (
            <label className="input-wrapper" htmlFor="username">
              Ваш номер
              <input
                required
                type="tel"
                name="phone"
                id="phone"
                placeholder="+998 9- --- -- -- "
                pattern="^(?:\+998)?(?:\d{2})?(?:\d{7})$"
              />
              <span id="error-message">Введите номер в правильном формате</span>
            </label>
    )
} 