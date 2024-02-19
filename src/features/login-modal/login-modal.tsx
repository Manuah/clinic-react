import React, { useState } from 'react';
import './login-modal.scss';
import { Outlet, useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import { authStorage } from '../../authStorage';
import * as request from "superagent"

function getEmailError(email: string) {
  if (email == "")
    return "Email не должен быть пустым.";
  return null;
}

function getPassError(password: string) {
  if (password == "")
    return "Пароль обязателен.";
  if (password.length < 4)
    return "Пароль должен быть не менее 4 символов.";
  return null;
}

interface Props {
  isOpen: boolean;
  toggle: () => void;
}
export function LoginModal(props: Props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const [isButtonClicked, setisButtonClicked] = useState(false);
  const emailError = getEmailError(email);
  const passError = getPassError(password);
  const emailErrorMessage = isButtonClicked ? emailError : null;
  const passErrorMessage = isButtonClicked ? passError : null;
  const [serverErrorMessage, setServerErrorMessage] = useState("");

  async function logIn() {
    setisButtonClicked(true);
    if (emailError||passError){
      return;
    }
    // const response = await request.post('http://localhost:5000/auth/login').send(JSON.stringify({
    //   email: email,
    //   password: password
    // }))
    const response = await fetch('http://localhost:5000/auth/login', {
       method: 'POST',
       headers: {
         "Content-Type": "application/json",
      },
       body: JSON.stringify({
         email: email,
         password: password
       }),
     }) 
     
    if (response.status == 401)
    {
      setServerErrorMessage("Ошибка данных");
      return;
    }
    const data = await response.json();
    alert(JSON.stringify(data));
    navigate("/about/*");
  }
  
  return (
    <Modal isOpen={props.isOpen} toggle={props.toggle}>
      <div>Hello</div>
      <div className="overlay">
        <div className="card">
          <span className="card-title">Войти в систему</span>
          <span
                className="helper-text red-text"
              >
                {serverErrorMessage}
              </span>
          <div className="helper-text red-text"></div>

          <a className="brand-logo" onClick={props.toggle}>&#x2717;</a>

          <div className="card-content">
            <div className="input-field">
              <label htmlFor="email">Email:</label>
              <input value={email} onChange={event => { setEmail(event.target.value); 
              setServerErrorMessage("")}} 
              name="email" id="email" type="email" required />
              <span
                className="helper-text red-text"
              >
                {emailErrorMessage}
              </span>
            </div>
            <div className="input-field">
              <label htmlFor="password">Пароль:</label>
              <input value={password} onChange={event => {setPass(event.target.value); setServerErrorMessage("")}} 
              name="password" id="password" type="password" />
              <span
                className="helper-text red-text"
              >
                {passErrorMessage}
              </span>
            </div>
          </div>
          <div className="card-action">
            <button
              onClick={logIn}
              // disabled={!!emailError||!!passError}
              type="submit"
              // className="modal-action btn waves-effect"
            >
              Войти
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}
