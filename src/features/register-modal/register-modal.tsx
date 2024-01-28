import React from 'react';
import './register-page.scss';
import { Outlet, useNavigate } from 'react-router-dom';

export function RegisterModal() {
  const navigate = useNavigate();
  return (
   

<div className="overlay">
  <form className="card">
    <span className="card-title">Создать аккаунт</span>
    <div className="helper-text red-text"></div>

    <a className="brand-logo">&#x2717;</a>
    <div className="card-content">
      <div className="input-field">
        <label htmlFor="email">Email:</label>
        <input name="email" id="email" type="email" required />
        <span
   
          className="helper-text red-text"
        >
          Email не должен быть пустым.
        </span>
        <span

          className="helper-text red-text"
        >
          Введите корректный email.
        </span>
      </div>
      <div className="input-field">
        <label htmlFor="password">Пароль:</label>
        <input name="password" id="password" type="password" />
        <span

          className="helper-text red-text"
        >
          Пароль обязателен.
        </span>
        <span
          className="helper-text red-text"
        >
          Пароль должен быть не менее 4 символов.
        </span>
      </div>

      <div className="input-field">
        <label htmlFor="lastName">Ваша фамилия:</label>
        <input name="lastName" id="lastName" type="text" required />
        <span
          className="helper-text red-text"
        >
          Фамилия обязательна.
        </span>
      </div>


      <div className="input-field">
        <label htmlFor="firstName">Ваше имя:</label>
        <input
          name="firstName"
          id="firstName"
          type="text"
          required
        />
        <span
          className="helper-text red-text"
        >
          Имя обязательно.
        </span>
      </div>

  
      <div className="input-field">
        <label htmlFor="middleName">Ваше отчество:</label>
        <input
          name="middleName"
          id="middleName"
          type="text"
          required
        />
        <span
          className="helper-text red-text"
        >
          Отчество обязательно.
        </span>
      </div>

   
      <div className="input-field">
        <label htmlFor="birthday">Дата рождения:</label>
        <input
          name="birthday"
          id="birthday"
          type="date"
          required
        />
        <span
          className="helper-text red-text"
        >
          Дата рождения обязательна.
        </span>
      </div>


      <div className="input-field">
        <label htmlFor="phone">Номер телефона:</label>
        <input name="phone" id="phone" type="tel" required />
        <span
          className="helper-text red-text"
        >
          Номер телефона обязателен.
        </span>
      </div>


      <div className="input-field">
        <label htmlFor="address">Адрес:</label>
        <input name="address" id="address" type="text" required />
        <span
          className="helper-text red-text"
        >
          Адрес обязателен.
        </span>
      </div>


      <div className="input-field">
        <label htmlFor="snils">СНИЛС:</label>
        <input
          name="snils"
          id="snils"
          type="text"
          required
          pattern="\d{3}-\d{3}-\d{3} \d{2}"
        />
        <span
          className="helper-text red-text"
        >
          СНИЛС обязателен.
        </span>
        <span
          className="helper-text red-text"
        >
          Введите СНИЛС в формате XXX-XXX-XXX XX.
        </span>
      </div>
    </div>

    <div className="card-action">
      <button className="modal-action btn waves-effect">
        Создать
      </button>
    </div>
  </form>
</div>

  );
}
