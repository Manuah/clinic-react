import { useNavigate, useParams } from "react-router-dom";
import "./ClinicSchedule.scss";
import { useEffect, useState } from "react";

export function ClinicSchedule() {
  const { doctorName } = useParams();
  useEffect(() => alert(doctorName), []);
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
      const response = await fetch('http://localhost:5000/admin/createSchedule', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          doctorId: doctorName,
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
    
    }

    return (
<div>
<div className="card">
  <a className="brand-logo" onClick={() => { navigate("/myclinic/doctor/") }}>&#x2717;</a>

    <h3 className="card-title">Создание расписания {doctorName}</h3>
  
    <div>
      <div className="input-field">
        <label>Дата</label>
        <input onChange={event => { setDate(event.target.value); setServerErrorMessage("") }} type="date" id="date" name="date" required/>
      </div>
  
      <div className="time-interval">
        <div className="input-field">
          <label>Время начала</label>
          <input onChange={event => { setTimeStart(event.target.value); setServerErrorMessage("") }} type="time" id="startTime" name="startTime" required/>
        </div>
  
        <div className="input-field">
          <label>Время окончания</label>
          <input onChange={event => { setTimeEnd(event.target.value); setServerErrorMessage("") }}  type="time" id="endTime" name="endTime" required/>
        </div>
      </div>
  
      <div className="card-action">
        <button type="button" className="btn btn-secondary">Добавить интервал времени</button>
        <button className="btn btn-primary">Создать расписание</button>
      </div>
    </div>
  </div>
</div>
    )
}