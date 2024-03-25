import React, { ReactNode } from 'react';
import logo from './logo.svg';
import './App.scss';
import './LandingPage.scss';
import { Box } from './components/Box';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import useModal from './components/Modal/useModal';
import Modal from './components/Modal/Modal';
import { LoginModal } from './features/login-modal/login-modal';
import { authStorage } from './authStorage';
import { RegisterModal } from './features/register-modal/register-modal';
import { CloseModal } from './features/close-modal/close-modal';
//import { Button, Modal, ModalBody } from "reactstrap";

/*const MyModal = ({ children, trigger }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      {React.cloneElement(trigger, { onClick: toggle })}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>{children}</ModalBody>
      </Modal>
    </div>
  );
}; */


// function logOut() {
//   if (window.confirm("Вы уверены, что хотите выйти?") ){
//     authStorage.token = ""; 
//     authStorage.userName = "";
//     window.location.href = "/";
//   }
// }

export function LandingPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const loginModal = useModal();
  const registerModal = useModal();
  const closeConfirmModal = useModal();


  function openRegister() {
    loginModal.closeModal();
    registerModal.openModal(loginModal.pathToRedirect);
    return
  }

  return (
    <div>
      <nav>
        <div className="nav-wrapper grey darken-1">
          <a onClick={() => navigate("/")} className="brand-logo">Aegle</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {/* <li><a onClick={() => { navigate("/login") }}>Вход</a></li>
            <li><a onClick={() => { navigate("/register") }}>Регистрация</a></li> */}

            {/* <button disabled={true} onClick={() => openModal("/")}>Вход</button> */}
            {/* className={`${authStorage.token == "" ? "" : "disabledLink"}`} */}
            <li>
             {authStorage.token == "" ? (
              <a onClick={() => loginModal.openModal("/")}>
              Вход
              </a>
             ) : (
              <a onClick={() => closeConfirmModal.openModal("/")}>
              Выход
              </a>
             )} 
              </li>

          </ul>
        </div>
      </nav>
      <div className="auth-block">
        <div className="landing-container">
          {/* <div>  {authStorage.token}</div> */}
          <h1>Welcome to Aegle Polyclinic</h1>
          <p>Ваш надежный партнер в сфере здравоохранения</p>
          <div>
            {authStorage.token == "" ?
              <div></div> :
              <div>
                <p>Вы вошли в систему!</p>
                <a className='lka' onClick={() => navigate("/myclinic")}>&gt;&gt;&gt;В ЛИЧНЫЙ КАБИНЕТ&lt;&lt;&lt;</a>
              </div>}
          </div>
          {/* <img myadmin myclinic
            className="clinic-image"
            src="http://klublady.ru/uploads/posts/2022-07/thumbs/1658582446_18-klublady-ru-p-posokh-asklepiya-tatu-eskiz-foto-18.jpg"
            alt="Clinic Image"
          /> */}
          <div className="search-tabs">
            <button className={`tab ${location.pathname == "/clinics" ? "active" : ""}`}
              onClick={() => { navigate("/clinics") }}>По поликлиникам</button>
            <button className={`tab ${location.pathname == "/doctors" ? "active" : ""}`} onClick={() => { navigate("/doctors") }}>По врачам</button>
            <button className={`tab ${location.pathname == "/services" ? "active" : ""}`} onClick={() => { navigate("/services") }}>По услугам</button>
          </div>
          <Outlet context={{ openLoginModal: loginModal.openModal }} />
          <div>
            {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={toggle}>Open Modal </button>
      <Modal isOpen={isOpen} toggle={toggle}>
        <div>Hello</div>
      </Modal> */}
            <LoginModal isOpen={loginModal.isOpen} closeModal={loginModal.closeModal}
              pathToRedirect={loginModal.pathToRedirect} openRegister={openRegister} />

            <RegisterModal isOpen={registerModal.isOpen} closeModal={registerModal.closeModal}
              pathToRedirect={registerModal.pathToRedirect} />

          <CloseModal isOpen={closeConfirmModal.isOpen} closeModal={closeConfirmModal.closeModal}/>
          </div>
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
