import { useNavigate, useOutletContext } from 'react-router-dom';
import './ServiceCard.scss';
import { ContinueRegisterService } from '../../continue-register-1/ContinueRegisterService';
import { authStorage } from '../../../authStorage';
type Props = {
    serviceId:string
    serviceName: string
}


export function ServiceCard(props: Props) {
    const outletContext = useOutletContext<{openLoginModal: (pathToRedirect: string) => void}>();
    const type = "service"
    async function book() {
        if (authStorage.token == "") {
            const stringToGo:string = "/continueRegisterService/" + type + "/" + props.serviceId
            outletContext.openLoginModal(stringToGo) //после авторизации идем на продолжение записи
        }
        else 
        {
            navigate("/continueRegisterService/" + type + "/" + props.serviceId) //сразу переходим на страницу записи
           
        }
    }
    const navigate = useNavigate();
    return (
            <div className="card-doc">
                <img src="https://alcovin-sale.goodsalediscount.com/files/alkowin_1/img/icon04.png" alt="Doctor" /> 
                <div className="card-info">
                    <p>{props.serviceName}</p>
                    {/* <p>{props.doctorSpecialty}</p> */}
                    <button onClick={book}>Выбрать больницу</button>
                </div>
            </div>
    );
}