import './ClinicsCard.scss';
type Props = {
    clinicName: string
}
export function ClinicCard(props: Props) {
    return (
            <div className="card-doc">
                <img src="https://alcovin-sale.goodsalediscount.com/files/alkowin_1/img/icon04.png" alt="Doctor" /> 
                <div className="card-info">
                    <p>{props.clinicName}</p>
                    {/* <p>{props.doctorSpecialty}</p> */}
                    <button>Выбрать больницу</button>
                </div>
            </div>
    );
}