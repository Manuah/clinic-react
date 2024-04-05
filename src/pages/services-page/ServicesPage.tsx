import { ChangeEvent, useEffect, useState } from 'react';
import './ServicePage.scss';
import { useDebounce } from '../../hooks/useDebounce';
import { ServiceCard } from './ServiceCard/ServiceCard';
type Service = {
    id_services: string, 
    title: string
}
export function ServicesPage() {
    const [service, setService] = useState<Service[]>([])
    const [value, setValue] = useState<string>('')
    const debouncedValue = useDebounce<string>(value, 500) //для задержки при вводе фильтра
    const [serverErrorMessage, setServerErrorMessage] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    setServerErrorMessage("")
  }
    async function fetchService(filter = '') {
        // const response = await request.post('http://localhost:5000/auth/login').send(JSON.stringify({
        //   email: email,
        //   password: password
        // }))
        const response = await fetch('http://localhost:5000/service/?filter=' + filter, {
         }) 
         
        const data = await response.json();
        //alert(JSON.stringify(data));
        if (response.status == 404)
        {
            setServerErrorMessage("Услуги не найдены");
            setService([]);
            return;
        }
        else{
            setService(data);
        }
        

      }
      useEffect(() => {
       // alert(debouncedValue)
       fetchService(debouncedValue)
    }, [debouncedValue])
    return (
        <div className="container">
            <div className="search-container">
                <input onChange={handleChange} value={value} type="text" id="searchInput" className="search-input" placeholder="Начните вводить" />
                    <img id="searchButton" className="search-button" src="https://palantinnsk.ru/local/templates/palantinnsk/assets/search.png" alt="Search" />
            </div>
            <br></br>
            <span>{serverErrorMessage}</span>
            <div className="card-container">
            {service.map(service => <ServiceCard serviceName={service.title}/>)} 
            {/* вытаскиваем массив и распределяем по карточкам */}
            </div>
           
        </div>
    );
}