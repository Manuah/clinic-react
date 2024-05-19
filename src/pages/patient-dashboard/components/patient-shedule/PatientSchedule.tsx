import { useDebounce } from '../../../../hooks/useDebounce';
import './PatientSchedule.scss';
import { ChangeEvent, useEffect, useState } from 'react';
import { authStorage } from '../../../../authStorage';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
// import { useDebounce } from '../../hooks/useDebounce';
 interface Schedule {
    date: string, 
    start_time: string, 
    end_time: string, 
    problem_description: string,
    doctor_name: string,
  }

export function PatientSchedule() {
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
            <h2>Запланированные приемы</h2>
            <button>История приемов</button>
            <div className="search-tabs">
            <button className={`tab ${location.pathname == "/my/schedule/doctors" ? "active" : ""}`} onClick={() => { navigate("/my/schedule/doctors") }}>По врачам</button>
            <button className={`tab ${location.pathname == "/my/schedule/services" ? "active" : ""}`} onClick={() => { navigate("/my/schedule/services") }}>По услугам</button>
          </div>
          <Outlet/>
        </div>
    );
}