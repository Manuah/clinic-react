import { useNavigate, useOutletContext } from 'react-router-dom';
import { authStorage } from '../../../authStorage';
import './DoctorsCard.scss';
type Props = {
    doctorName: string
    doctorSpecialty: string
}
export function DoctorCard(props: Props) {
    const navigate = useNavigate();
    const outletContext = useOutletContext<{openLoginModal: (pathToRedirect: string) => void}>();
    async function book() {
        if (authStorage.token == "") {
            outletContext.openLoginModal("/my") //после авторизации идем на продолжение записи
        }
        else 
        {
            navigate("/clinics"); //сразу переходим на страницу записи
           
        }
    }

    return (
            <div className="card-doc">
                <img src="" alt="Doctor" />
                <div className="card-info">
                    <p>{props.doctorName}</p>
                    <p>{props.doctorSpecialty}</p>
                    <button onClick={book}>Записаться</button>
                </div>
            </div>
    );
}