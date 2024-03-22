import { useNavigate, useParams } from "react-router-dom";
import "./ClinicEdit.scss";
import { useState } from "react";

export function ClinicEdit() {
  const { doctorId } = useParams();
  //useEffect(() => alert(doctorId), []);
  const navigate = useNavigate();

  const [date, setDate] = useState<string>("");
  const [timeStart, setTimeStart] = useState<string>("");
  const [timeEnd, setTimeEnd] = useState<string>("");

  const [isButtonClicked, setisButtonClicked] = useState(false);

  const dateErrorMessage = "";
  const timeStartErrorMessage = "";
  const timeEndErrorMessage = "";

  //const emailErrorMessage = isButtonClicked ? emailError : null;
  //const passErrorMessage = isButtonClicked ? passError : null;
  const [serverErrorMessage, setServerErrorMessage] = useState("");
  
    async function createSchedule() {
      setisButtonClicked(true);
      if (dateErrorMessage || timeStartErrorMessage || timeEndErrorMessage) {
        return;
      }
      if (!date || !timeStart || !timeEnd) {
        alert("не заполнены поля")
        return;
      }
      // const response = await request.post('http://localhost:5000/auth/login').send(JSON.stringify({
      //   email: email,
      //   password: password
      // }))
      const response = await fetch('http://localhost:5000/clinic/createSchedule', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          doctorId: doctorId,
          date: date,
          timeStart: timeStart,
          timeEnd: timeEnd,
        }),
      })

      if (response.status == 401) {
        setServerErrorMessage("Ошибка данных");
        return;
      }
      const data = await response.json();
      alert(JSON.stringify(data));
      if (response.status == 201) {
        alert("расписание успешно создано")
        return;
      }
    
    }
    return (
<div>
<div className="card">
    <div className="card-content">
      <span className="card-title">Редактировать Доктора {doctorId}
</span>
  
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
      <button className="btn">Сохранить изменения</button>
    </div>
    <div className="file-upload">
    <input type="file" accept=".xlsx, .xls" />
    <button>Загрузить Excel</button>
  </div>

  </div>

</div>

    )
}