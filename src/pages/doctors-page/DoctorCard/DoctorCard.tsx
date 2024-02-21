import { useNavigate, useOutletContext } from 'react-router-dom';
import { authStorage } from '../../../authStorage';
import './DoctorsCard.scss';
type Props = {
    doctorName: string
    doctorSpecialty: string
}
export function DoctorCard(props: Props) {
    const navigate = useNavigate();
    const outletContext = useOutletContext<{openModal: (pathToRedirect: string) => void}>();
    async function book() {
        if (authStorage.token == "") {
            outletContext.openModal("/my") //после авторизации идем на продолжение записи
        }
        else 
        {
            navigate("/clinics"); //сразу переходим на страницу записи
           
        }
    }

    return (
            <div className="card-doc">
                <img src="https://gas-kvas.com/grafic/uploads/posts/2023-09/1695968146_gas-kvas-com-p-kartinki-vracha-18.jpg" alt="Doctor" />
                <div className="card-info">
                    <p>{props.doctorName}</p>
                    <p>{props.doctorSpecialty}</p>
                    <button onClick={book}>Записаться</button>
                </div>
            </div>
    );
}