import "./ClinicSchedule.scss";

export function ClinicSchedule() {
    return (
<div>
<div className="card">
  <a className="brand-logo">&#x2717;</a>

    <h3 className="card-title">Создание расписания</h3>
  
    <div>
      <div className="input-field">
        <label htmlFor="date">Дата</label>
        <input type="date" id="date" name="date" required/>
      </div>
  
      <div className="time-interval">
        <div className="input-field">
          <label htmlFor="startTime{{i}}">Время начала</label>
          <input type="time" id="startTime{{i}}" name="startTimes{{i}}" required/>
        </div>
  
        <div className="input-field">
          <label htmlFor="endTime{{i}}">Время окончания</label>
          <input type="time" id="endTime{{i}}" name="endTimes{{i}}" required/>
        </div>
      </div>
  
      <div className="card-action">
        <button type="button" className="btn btn-secondary">Добавить интервал времени</button>
        <button type="submit" className="btn btn-primary">Создать расписание</button>
      </div>
    </div>
  </div>
</div>
    )
}