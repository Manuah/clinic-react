import "./AdminCreateClinic.scss";

export function AdminCreateClinic() {
    return (
<div>
<div className="card">
    <div className="card-content">
      <span className="card-title">Добавить поликлинику</span>
  
      <div className="input-field">
        <label htmlFor="firstName">Имя:</label>
        <input id="firstName" type="text" />
        <span className="helper-text red-text">
          Имя обязательно.
        </span>
      </div>
  
      <div className="input-field">
        <label htmlFor="lastName">Фамилия:</label>
        <input id="lastName" type="text" />
        <span className="helper-text red-text">
          Фамилия обязательна.
        </span>
      </div>
  
      <div className="input-field">
        <label htmlFor="middleName">Отчество:</label>
        <input id="middleName" type="text" />
        <span className="helper-text red-text">
            Отчество обязательна.
          </span>
      </div>
  
      <div className="input-field">
        <label htmlFor="specialty">Специальность:</label>
        <input id="specialty" type="text" />
        <span className="helper-text red-text">
            Специальность обязательна.
          </span>
      </div>
  

      <div className="input-field">
        <label htmlFor="email">Email:</label>
        <input  id="email" type="email" />
        <span className="helper-text red-text">
          Email не должен быть пустым.
        </span>
        <span className="helper-text red-text">
          Введите корректный email.
        </span>
      </div>
  
      <div className="input-field">
        <label htmlFor="password">Пароль:</label>
        <input id="password" type="password" />
        <span className="helper-text red-text">
          Пароль обязателен.
        </span>
        <span className="helper-text red-text">
          Пароль должен быть не менее 4 символов.
        </span>
      </div>
    </div>
  
    <div className="card-action">
      <button className="btn">Добавить</button>
    </div>
    <div className="file-upload">
    <input type="file" accept=".xlsx, .xls" />
    <button>Загрузить Excel</button>
  </div>

  </div>

</div>

    )
}