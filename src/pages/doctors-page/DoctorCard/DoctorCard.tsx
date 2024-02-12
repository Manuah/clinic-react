import './DoctorsCard.scss';
type Props = {
    doctorName: string
}
export function DoctorCard(props: Props) {
    return (
            <div className="card-doc">
                <img src="https://gas-kvas.com/grafic/uploads/posts/2023-09/1695968146_gas-kvas-com-p-kartinki-vracha-18.jpg" alt="Doctor" />
                <div className="card-info">
                    <p>{props.doctorName}</p>
                    <p>Специализация</p>
                    <button>Записаться</button>
                </div>
            </div>
    );
}