import { DoctorCard } from './DoctorCard/DoctorCard';
import './DoctorsPage.scss';
export function DoctorsPage() {
    const doctors = [{name: "name1"}, {name: "name2"}]
    return (
        <div className="container">
            <div className="search-container">
                <input type="text" id="searchInput" className="search-input" placeholder="Начните вводить" />
                    <img id="searchButton" className="search-button" src="https://e7.pngegg.com/pngimages/254/829/png-clipart-computer-icons-magnifying-glass-magnifier-magnifying-glass-glass-illustrator.png" alt="Search" />
            </div>
            {doctors.map(doctor => <DoctorCard doctorName={doctor.name}/>)} 
            {/* вытаскиваем массив и распределяем по карточкам */}
        </div>
    );
}