import { useNavigate, useOutletContext } from 'react-router-dom';

import { useEffect, useState } from 'react';
import useModal from '../../../../../../components/Modal/useModal';
type Props = {
  created_at: string, 
  start_time: string, 
  end_time: string, 
  policlinic_name: string,
  address: string,
  service_name: string,
  }
//export const [deleteConfirmed, setDeleteConfirmed] = useState("")
export function PatientHistoryCard(props: Props) {
    const navigate = useNavigate();
    const deleteConfirmModal= useModal();

   // useEffect(() => alert(props.doctorId), []);
    const outletContext = useOutletContext<{openLoginModal: (pathToRedirect: string) => void}>();

    return (
      <div className="schedule-container">
      <div className="schedule-item">
        <div className="schedule-details">
        <h2>
            <strong>Услуга:</strong>
            {props.service_name}
          </h2>
          <p>
            <strong>Время начала:</strong>
            {props.start_time}
          </p>
          <p>
            <strong>Время окончания:</strong>
            {props.end_time}
          </p>
           <p><strong>Поликлиника:</strong> {props.policlinic_name} </p>
          <p><strong>Дата записи:</strong> {props.created_at} </p>
          {/* <button onClick={() => navigate("/mydoctor/medinfo/" + props.patient_id)} className="btn">
            Просмотреть мед. карту
          </button> */}
        </div>
      </div>
    </div>
       
    );
}