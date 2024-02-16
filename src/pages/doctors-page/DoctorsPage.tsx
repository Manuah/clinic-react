import { ChangeEvent, useEffect, useState } from 'react';
import { DoctorCard } from './DoctorCard/DoctorCard';
import './DoctorsPage.scss';
import { useDebounce } from '../../hooks/useDebounce';
type Doctor = {
    id: string, 
    name: string
}
export function DoctorsPage() {
    const [doctors, setDoctors] = useState<Doctor[]>([])
    const [value, setValue] = useState<string>('')
    const debouncedValue = useDebounce<string>(value, 500)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
    async function fetchDoctors(filter = '') {
        // const response = await request.post('http://localhost:5000/auth/login').send(JSON.stringify({
        //   email: email,
        //   password: password
        // }))
        const response = await fetch('http://localhost:5000/doctors/?filter=' + filter, {
         }) 
         
        const data = await response.json();
        setDoctors(data);
        alert(JSON.stringify(data));

      }
      useEffect(() => {
        alert(debouncedValue)
        fetchDoctors(debouncedValue)
    }, [debouncedValue])
    return (
        <div className="container">
            <div className="search-container">
                <input onChange={handleChange} value={value} type="text" id="searchInput" className="search-input" placeholder="Начните вводить" />
                    <img id="searchButton" className="search-button" src="https://palantinnsk.ru/local/templates/palantinnsk/assets/search.png" alt="Search" />
            </div>
            <div className="card-container">
            {doctors.map(doctor => <DoctorCard doctorName={doctor.name}/>)} 
            {/* вытаскиваем массив и распределяем по карточкам */}
            </div>
           
        </div>
    );
}