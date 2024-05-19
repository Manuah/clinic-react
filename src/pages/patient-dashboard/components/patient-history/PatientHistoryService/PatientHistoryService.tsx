import '../PatientHistory.scss';
import { ChangeEvent, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { authStorage } from '../../../../../authStorage';
import { PatientHistoryCard } from './PatientHistoryCard/PatientHistoryCard';
// import { useDebounce } from '../../hooks/useDebounce';
 interface Schedule {
    created_at: string, 
    start_time: string, 
    end_time: string, 
    policlinic_name: string,
    address: string,
    service_name: string,
  }

export function PatientHistoryService() {
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
        const response = await fetch('http://localhost:5000/patient/getServicechedules?id=' + authStorage.userId + "&status=false", {
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
            <span className="errormes">{serverErrorMessage}</span>
            <div className="card-container">
            {schedules.map(schedules => <PatientHistoryCard  created_at={schedules.created_at} start_time= {schedules.start_time} end_time ={schedules.end_time} 
            policlinic_name = {schedules.policlinic_name}
            service_name ={schedules.service_name} address ={schedules.address}/>)} 
            {/* вытаскиваем массив и распределяем по карточкам */}
            </div>
        </div>
    );
}