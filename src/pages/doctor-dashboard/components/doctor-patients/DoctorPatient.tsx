import { useDebounce } from '../../../../hooks/useDebounce';
import './AdminDoctor.scss';
import { ChangeEvent, useEffect, useState } from 'react';
import { AdminClinicCard } from './DoctorPatientCard/DoctorPatientCard';
// import { useDebounce } from '../../hooks/useDebounce';
type Patient = {
    name: string, 
    snils: string
    phone: string
}
export function DoctorPatients() {
    const [patients, setPatients] = useState<Patient[]>([])
    const [value, setValue] = useState<string>('')
    const debouncedValue = useDebounce<string>(value, 500) //для задержки при вводе фильтра
    const [serverErrorMessage, setServerErrorMessage] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    setServerErrorMessage("")
  }
    async function fetchPatients(filter = '') {
        // const response = await request.post('http://localhost:5000/auth/login').send(JSON.stringify({
        //   email: email,
        //   password: password
        // }))
        const response = await fetch('http://localhost:5000/doctors/?filter=' + filter, {
         }) 
         
        const data = await response.json();
        //alert(JSON.stringify(data));
        if (response.status == 404)
        {
            setServerErrorMessage("Врачи не найдены");
            setPatients([]);
            return;
        }
        else{
            setPatients(data);
        }
        

      }
      useEffect(() => {
       // alert(debouncedValue)
       fetchPatients(debouncedValue)
    }, [debouncedValue])
    return (
            <div className="doctors-container">
            <h2>Список поликлиник</h2>
            {/* <div className="search-container">
                <input onChange={handleChange} value={value} type="text" id="searchInput" className="search-input" placeholder="Начните вводить" />
                    <img id="searchButton" className="search-button" src="https://palantinnsk.ru/local/templates/palantinnsk/assets/search.png" alt="Search" />
            </div> */}
            <br></br>
            <span className="errormes">{serverErrorMessage}</span>
            <div className="card-container">
            {patients.map(patient => <AdminClinicCard name={patient.name} snils={patient.snils} phone={patient.phone} />)} 
            {/* вытаскиваем массив и распределяем по карточкам */}
            </div>
           
        </div>
    );
}