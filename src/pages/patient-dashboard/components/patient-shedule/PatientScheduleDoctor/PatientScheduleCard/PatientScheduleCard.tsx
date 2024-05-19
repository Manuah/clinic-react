import { useNavigate, useOutletContext } from 'react-router-dom';

import { useEffect, useState } from 'react';
import useModal from '../../../../../../components/Modal/useModal';
type Props = {
  date: string, 
  start_time: string, 
  end_time: string, 
  problem_description: string,
  doctor_name: string,
  }
//export const [deleteConfirmed, setDeleteConfirmed] = useState("")
export function PatientScheduleCard(props: Props) {
    const navigate = useNavigate();
    const deleteConfirmModal= useModal();

   // useEffect(() => alert(props.doctorId), []);
    const outletContext = useOutletContext<{openLoginModal: (pathToRedirect: string) => void}>();

    return (
      <div className="schedule-container">
      <div className="schedule-item">
        <div className="schedule-details">
        <h2>
            <strong>Дата посещения:</strong>
            {props.date}
          </h2>
          <p>
            <strong>Время начала:</strong>
            {props.start_time}
          </p>
          <p>
            <strong>Время окончания:</strong>
            {props.end_time}
          </p>
           <p><strong>Врач:</strong> {props.doctor_name} </p>
          <p><strong>Проблема:</strong> {props.problem_description} </p>
          {/* <button onClick={() => navigate("/mydoctor/medinfo/" + props.patient_id)} className="btn">
            Просмотреть мед. карту
          </button> */}
        </div>
      </div>
    </div>
       
    );
}