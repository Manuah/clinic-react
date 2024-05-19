import { useDebounce } from '../../../../hooks/useDebounce';
import './PatientHistory.scss';
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

export function PatientHistory() {
   const navigate = useNavigate();
   const location = useLocation();
    const [schedules, setSchedules] = useState<Schedule[]>([])

    // const [value, setValue] = useState<string>('')
    // const debouncedValue = useDebounce<string>(value, 500) //для задержки при вводе фильтра
    const [serverErrorMessage, setServerErrorMessage] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setServerErrorMessage("")
  }

    return (
            <div className="doctors-container">
            <h2>История приемов</h2>
            <div className="search-tabs">
            <button className={`tab ${location.pathname == "/my/history/doctors" ? "active" : ""}`} onClick={() => { navigate("/my/history/doctors") }}>По врачам</button>
            <button className={`tab ${location.pathname == "/my/history/services" ? "active" : ""}`} onClick={() => { navigate("/my/history/services") }}>По услугам</button>
          </div>
          <Outlet/>
        </div>
    );
}