import { Outlet, useNavigate } from "react-router-dom";
import { resolveTypeReferenceDirective } from "typescript";
import './ClinicDashboard.scss';

export function ClinicPage() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="sidebar">
        <a onClick={() => { navigate("/myclinic/doctor") }}>Список врачей</a>
        <a onClick={() => { navigate("/myclinic/create") }}>Добавить врача</a>
        {/* <a onClick={() => { navigate("/myclinic/schedule") }}>Расписание</a> */}
        <a onClick={() => { navigate("/") }}>Выйти</a>
      </div>
      <Outlet />
    </div>

  )


}