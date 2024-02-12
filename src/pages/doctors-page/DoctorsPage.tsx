import { DoctorCard } from './DoctorCard/DoctorCard';
import './DoctorsPage.scss';
export function DoctorsPage() {
    const doctors = [{name: "name1"}, {name: "name2"}]
    return (
        <div className="container">
            <div className="search-container">
                <input type="text" id="searchInput" className="search-input" placeholder="Начните вводить" />
                    <img id="searchButton" className="search-button" src="https://palantinnsk.ru/local/templates/palantinnsk/assets/search.png" alt="Search" />
            </div>
            <div className="card-container">
            {doctors.map(doctor => <DoctorCard doctorName={doctor.name}/>)} 
            {/* вытаскиваем массив и распределяем по карточкам */}
            </div>
           
        </div>
    );
}