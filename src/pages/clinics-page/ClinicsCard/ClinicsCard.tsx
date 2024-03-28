import { useNavigate } from 'react-router-dom';
import './ClinicsCard.scss';
type Props = {
    clinicName: string
    clinicId: string
}
export function ClinicCard(props: Props) {
    const navigate = useNavigate();
    function goToClinic() {
       navigate("/landing/" + props.clinicId)
    }

    return (
            <div className="card-doc">
                <img src="https://alcovin-sale.goodsalediscount.com/files/alkowin_1/img/icon04.png" alt="Doctor" /> 
                <div className="card-info">
                    <p>{props.clinicName}</p>
                    {/* <p>{props.doctorSpecialty}</p> */}
                    <button onClick={goToClinic}>Выбрать больницу</button>
                </div>
            </div>
    );
}