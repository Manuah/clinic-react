import React from 'react';
import logo from './logo.svg';
import './App.scss';
import './auth-layout.scss';
import { Box } from './components/Box';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  return (
    <div>
<nav>
  <div className="nav-wrapper grey darken-1">
    <a className="brand-logo">Aegle</a>
   <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><a onClick={() => {navigate("/about")}}>Вход</a></li>
      <li>
        <a>Регистрация</a>
      </li>
    </ul>
  </div>
</nav>
<div className="auth-block">
  <div className="landing-container">
    <h1>Welcome to Aegle Polyclinic</h1>
    <p>Ваш надежный партнер в сфере здравоохранения</p>
    <img
      className="clinic-image"
      src="http://klublady.ru/uploads/posts/2022-07/thumbs/1658582446_18-klublady-ru-p-posokh-asklepiya-tatu-eskiz-foto-18.jpg"
      alt="Clinic Image"
    />
    <p>
      Мы предлагаем широкий спектр медицинских услуг для обеспечения вашего
      благополучия. Наша команда опытных врачей и персонала стремится
      предоставить высококачественную помощь в комфортных условиях.
    </p>
    <div className="services-container">
      <div className="service">
        <h2>Общая медицина</h2>
        <p>
          Комплексная медицинская помощь для взрослых и детей, включая
          профилактические услуги, регулярные обследования и лечение общих
          заболеваний.
        </p>
      </div>
      <div className="service">
        <h2>Специализированные клиники</h2>
        <p>
          Специализированные клиники по различным медицинским состояниям, где
          работают эксперты в соответствующих областях для оказания
          целенаправленной помощи и лечения.
        </p>
      </div>
      <div className="service">
        <h2>Диагностические услуги</h2>
        <p>
          Современные диагностические услуги, включая лабораторные анализы,
          изображение и передовые диагностические процедуры для точного и
          своевременного выявления заболеваний.
        </p>
      </div>
    </div>
  </div>
  <div className="footer">
    <div className="decorative-line"></div>
    <div className="footer-info">
      <div className="contact-info">
        <h3>Contact Us</h3>
        <p><i className="fas fa-envelope"></i>Email: info@aegleclinic.com</p>
        <p><i className="fas fa-phone"></i>Phone: +1 123-456-7890</p>
      </div>
      <div className="social-media">
        <h3>Follow Us</h3>
        <p>
          <i className="fab fa-facebook"></i>Facebook |
          <i className="fab fa-twitter"></i>Twitter |
          <i className="fab fa-instagram"></i>Instagram
        </p>
      </div>
    </div>
    <div className="decorative-line"></div>
    <p>&copy; 2023 Aegle Polyclinic. All rights reserved.</p>
    <p>Designed with ❤️ by Aegle Team</p>
  </div>
</div>
    </div>
  
  );
}

export default App;
