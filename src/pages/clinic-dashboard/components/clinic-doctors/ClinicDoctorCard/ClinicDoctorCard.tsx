import { useNavigate, useOutletContext } from 'react-router-dom';
import { authStorage } from '../../../../../authStorage';
import { useEffect, useState } from 'react';
type Props = {
    doctorId: string
    doctorName: string
    doctorSpecialty: string
}
export function ClinicDoctorCard(props: Props) {
    const navigate = useNavigate();
   // useEffect(() => alert(props.doctorId), []);
    const outletContext = useOutletContext<{openLoginModal: (pathToRedirect: string) => void}>();
   // const [hasDeleted, setHasDeleted] = useState(false);
    

    function deleteConfirm() {
      if (window.confirm("Вы уверены, что хотите удалить " + props.doctorName + "?" ) ){
        deleteDoctor()
      }
    }

    async function deleteDoctor() {
      const response = await fetch('http://localhost:5000/clinic/deleteDoctor', {
         method: 'DELETE',
         headers: {
           "Content-Type": "application/json",
        },
         body: JSON.stringify({
          doctorId: props.doctorId
         }),
       }) 
       
      // if (response.status == 401)
      // {
      //   setServerErrorMessage("Ошибка данных");
      //   return;
      // }
     // alert(!hasDeleted);
    //  setHasDeleted(!hasDeleted);

      //alert(JSON.stringify(data));
        // if (authStorage.token == "") {
        //     outletContext.openLoginModal("/my") //после авторизации идем на продолжение записи
        // }
        // else 
        // {
        //     navigate("/clinics"); //сразу переходим на страницу записи
           
        // }
    }

    return (
       <div className='doctors-list'>
        <p><strong>Имя:</strong> {props.doctorName}</p>
        <p><strong>Специальность:</strong> {props.doctorSpecialty}</p>
        <div className="btn-box">
          <button onClick={deleteConfirm}>
            Удалить
          </button>
         
          <button onClick={() => { navigate("/myclinic/schedule/" + props.doctorId) }}>Создать расписание</button>
          <button onClick={() => { navigate("/myclinic/edit/" + props.doctorId) }}>Редактировать</button>
       </div>
       </div>
    );
}