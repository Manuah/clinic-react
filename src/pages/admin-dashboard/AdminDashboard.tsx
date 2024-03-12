import { Outlet, useNavigate } from "react-router-dom";
import { resolveTypeReferenceDirective } from "typescript";
import './AdminDashboard.scss';

export function AdminPage() {
    const navigate = useNavigate();
    return(
        <div> 
<div className="sidebar">
  <a  onClick={() => { navigate("/myadminclinics") }}>Список поликлиник</a>
  <a  onClick={() => { navigate("/myadmindoctorcreate") }}>Добавить поликлинику</a>
  <a  onClick={() => { navigate("/clinics") }}>Расписание</a>
  <a>Выйти</a>
</div>

<Outlet/>

        </div>

    )
        

}