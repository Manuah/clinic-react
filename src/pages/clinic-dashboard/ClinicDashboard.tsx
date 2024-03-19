import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { resolveTypeReferenceDirective } from "typescript";
import './ClinicDashboard.scss';
import { useEffect } from "react";

export function ClinicPage() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
      <div className="sidebar">
        <h2>КЛИНИКА</h2>
        <a className= {`${location.pathname == "/myclinic/doctor" ? "sidebar-active" : ""}`} onClick={() => { navigate("/myclinic/doctor") }}>Список врачей</a>
        <a className= {`${location.pathname == "/myclinic/create" ? "sidebar-active" : ""}`} onClick={() => { navigate("/myclinic/create") }}>Добавить врача</a>
        {/* <a onClick={() => { navigate("/myclinic/schedule") }}>Расписание</a> */}
        <a onClick={() => { navigate("/") }}>Выйти</a>
      </div>
      <Outlet />
    </div>

  )


}