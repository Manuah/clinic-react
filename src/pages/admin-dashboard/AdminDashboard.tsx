import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { resolveTypeReferenceDirective } from "typescript";
import './AdminDashboard.scss';

export function AdminPage() {
    const navigate = useNavigate();
    const location = useLocation();
    return(
        <div> 
<div className="sidebar">
<h2>АДМИН</h2>
  <a className= {`${location.pathname == "/myadmin/clinics" ? "sidebar-active" : ""}`} onClick={() => { navigate("/myadmin/clinics") }}>Список поликлиник</a>
  <a className= {`${location.pathname == "/myadmin/cliniccreate" ? "sidebar-active" : ""}`} onClick={() => { navigate("/myadmin/cliniccreate") }}>Добавить поликлинику</a>
  {/* <a  onClick={() => { navigate("/clinics") }}>Расписание</a> */}
  <a>Выйти</a>
</div>

<Outlet/>

        </div>

    )
        


}