import { Outlet, useNavigate } from "react-router-dom";
import { resolveTypeReferenceDirective } from "typescript";
import './ClinicDashboard.scss';

export function ClinicPage() {
    const navigate = useNavigate();
    return(
        <div> 
<div className="sidebar">
  <a  onClick={() => { navigate("/myclinicdoctor") }}>Список врачей</a>
  <a  onClick={() => { navigate("/myadmindoctorcreate") }}>Добавить врача</a>
  <a  onClick={() => { navigate("/clinics") }}>Расписание</a>
  <a>Выйти</a>
</div>

<Outlet/>

        </div>

    )
        

}