import React, { useState } from 'react';
import './login-modal.scss';
import { Outlet, useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';

function getEmailError(email: string){ 
  if (email == "")
  return  "Email не должен быть пустым.";
return null;

}

interface Props {
  isOpen: boolean;
  toggle: () => void;
}
export function LoginModal(props: Props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isButtonClicked, setisButtonClicked] = useState(false);
  const emailError = getEmailError(email);
  const emailErrorMessage = isButtonClicked?emailError:null;
  return (
    <Modal isOpen={props.isOpen} toggle={props.toggle}>
      <div>Hello</div>
      <div className="overlay">
        <form className="card">
          <span className="card-title">Войти в систему</span>
          <div className="helper-text red-text"></div>

          <a className="brand-logo" onClick={props.toggle}>&#x2717;</a>

          <div className="card-content">
            <div className="input-field">
              <label htmlFor="email">Email:</label>
              <input value={email} onChange={event => setEmail(event.target.value)} name="email" id="email" type="email" required />
              <span
                className="helper-text red-text"
              >
                {emailErrorMessage}
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
          </div>
          <div className="card-action">
            <button
            onClick={() => {
              setisButtonClicked(true);
            }}
              type="submit"
              className="modal-action btn waves-effect"
            >
              Войти
            </button>
          </div>
        </form>
      </div>
    </Modal>
  )
}
