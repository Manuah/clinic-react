import '../PatientSchedule.scss';
import { ChangeEvent, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { authStorage } from '../../../../../authStorage';
import { PatientScheduleCard } from './PatientScheduleCard/PatientScheduleCard';
// import { useDebounce } from '../../hooks/useDebounce';
 interface Schedule {
    date: string, 
    start_time: string, 
    end_time: string, 
    problem_description: string,
    doctor_name: string,
  }

export function PatientScheduleDoctor() {
   const navigate = useNavigate();
   const location = useLocation();
    const [schedules, setSchedules] = useState<Schedule[]>([])

    // const [value, setValue] = useState<string>('')
    // const debouncedValue = useDebounce<string>(value, 500) //для задержки при вводе фильтра
    const [serverErrorMessage, setServerErrorMessage] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setServerErrorMessage("")
  }
    async function fetchSchedules() {
        // const response = await request.post('http://localhost:5000/auth/login').send(JSON.stringify({
        //   email: email,
        //   password: password
        // }))
        const response = await fetch('http://localhost:5000/patient/getSchedules?id=' + authStorage.userId + "&isBooked=" + true, {
         }) 
         
        const data = await response.json();
        //alert(JSON.stringify(data));
        if (!response.ok)
        {
            setServerErrorMessage("Приемы не найдены");
            setSchedules([]);
            return;
        }
        else{
            setSchedules(data);
            setServerErrorMessage("");
        }
      }
      
      useEffect(() => {
       // alert(debouncedValue)
       fetchSchedules()
    }, [])

    return (
            <div className="doctors-container">
            {/* <div className="search-container">
                <input onChange={handleChange} value={value} type="text" id="searchInput" className="search-input" placeholder="Начните вводить" />
                    <img id="searchButton" className="search-button" src="https://palantinnsk.ru/local/templates/palantinnsk/assets/search.png" alt="Search" />
            </div> */}
            <span className="errormes">{serverErrorMessage}</span>
            <div className="card-container">
            {schedules.map(schedules => <PatientScheduleCard  date={schedules.date} start_time= {schedules.start_time} end_time ={schedules.end_time} 
            problem_description = {schedules.problem_description}
            doctor_name ={schedules.doctor_name}/>)} 
            {/* вытаскиваем массив и распределяем по карточкам */}
            </div>
        </div>
    );
}