import React, { useState } from 'react';
import styles from './register-modal.module.scss';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  pathToRedirect: string;
}

export function RegisterModal(props: Props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const [isButtonClicked, setisButtonClicked] = useState(false);

  return (
    <Modal isOpen={props.isOpen}>
      <div className={styles.overlay}>
        <div className={styles.card}>
          <span className={styles["card-title"]}>Создать аккаунт</span>
          <div className={styles["helper-text red-text"]}></div>

          <a className={styles["brand-logo"]}>&#x2717;</a>
          <div className={styles["card-content"]}>
            <div className={styles["input-field"]}>
              <label htmlFor="email">Email:</label>
              <input name="email" id="email" type="email" required />
              <span

                className={styles["helper-text red-text"]}
              >
                Email не должен быть пустым.
              </span>
              <span

                className={styles["helper-text red-text"]}
              >
                Введите корректный email.
              </span>
            </div>
            <div className={styles["input-field"]}>
              <label htmlFor="password">Пароль:</label>
              <input name="password" id="password" type="password" />
              <span

                className={styles["helper-text red-text"]}
              >
                Пароль обязателен.
              </span>
              <span
                className={styles["helper-text red-text"]}
              >
                Пароль должен быть не менее 4 символов.
              </span>
            </div>

            <div className={styles["input-field"]}>
              <label htmlFor="lastName">Ваша фамилия:</label>
              <input name="lastName" id="lastName" type="text" required />
              <span
                className={styles["helper-text red-text"]}
              >
                Фамилия обязательна.
              </span>
            </div>


            <div className={styles["input-field"]}>
              <label htmlFor="firstName">Ваше имя:</label>
              <input
                name="firstName"
                id="firstName"
                type="text"
                required
              />
              <span
                className={styles["helper-text red-text"]}
              >
                Имя обязательно.
              </span>
            </div>


            <div className={styles["input-field"]}>
              <label htmlFor="middleName">Ваше отчество:</label>
              <input
                name="middleName"
                id="middleName"
                type="text"
                required
              />
              <span
                className={styles["helper-text red-text"]}
              >
                Отчество обязательно.
              </span>
            </div>


            <div className={styles["input-field"]}>
              <label htmlFor="birthday">Дата рождения:</label>
              <input
                name="birthday"
                id="birthday"
                type="date"
                required
              />
              <span
                className={styles["helper-text red-text"]}
              >
                Дата рождения обязательна.
              </span>
            </div>


            <div className={styles["input-field"]}>
              <label htmlFor="phone">Номер телефона:</label>
              <input name="phone" id="phone" type="tel" required />
              <span
                className={styles["helper-text red-text"]}>

                Номер телефона обязателен.
              </span>
            </div>


            <div className={styles["input-field"]}>
              <label htmlFor="address">Адрес:</label>
              <input name="address" id="address" type="text" required />
              <span
                className={styles["helper-text red-text"]}
              >
                Адрес обязателен.
              </span>
            </div>


            <div className={styles["input-field"]}>
              <label htmlFor="snils">СНИЛС:</label>
              <input
                name="snils"
                id="snils"
                type="text"
                required
                pattern="\d{3}-\d{3}-\d{3} \d{2}"
              />
              <span
                className={styles["helper-text red-text"]}
              >
                СНИЛС обязателен.
              </span>
              <span
                className={styles["helper-text red-text"]}
              >
                Введите СНИЛС в формате XXX-XXX-XXX XX.
              </span>
            </div>
            <div className={styles["card-action"]}>
              <button className={styles["modal-action btn waves-effect"]}>
                Создать
              </button>
            </div>
          </div>

        </div>
      </div>
    </Modal >

  );
}
