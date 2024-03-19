import { useNavigate, useOutletContext } from 'react-router-dom';
import { authStorage } from '../../../../../authStorage';
type Props = {
    doctorName: string
    doctorSpecialty: string
}
export function ClinicDoctorCard(props: Props) {
    const navigate = useNavigate();
    const outletContext = useOutletContext<{openLoginModal: (pathToRedirect: string) => void}>();
    // async function book() {
    //     if (authStorage.token == "") {
    //         outletContext.openLoginModal("/my") //после авторизации идем на продолжение записи
    //     }
    //     else 
    //     {
    //         navigate("/clinics"); //сразу переходим на страницу записи
           
    //     }
    // }

    return (
       <div className='doctors-list'>
        <p><strong>Имя:</strong> {props.doctorName}</p>
        <p><strong>Специальность:</strong> {props.doctorSpecialty}</p>
        <div className="btn-box">
          <button>
            Удалить
          </button>
          <button onClick={() => { navigate("/myclinic/schedule/" + props.doctorName) }}>Создать расписание</button>
          <button>Редактировать</button>
       </div>
       </div>
    );
}