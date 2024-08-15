import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { resolveTypeReferenceDirective } from "typescript";
import './PatientDashboard.scss';
import useModal from "../../components/Modal/useModal";
import { CloseModal } from "../../features/close-modal/close-modal";

export function PatientPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const closeConfirmModal = useModal();
  return (
    <div>
      <div className="sidebar">
        <h2 onClick={() => { navigate("/my") }}>ЛИЧНЫЙ КАБИНЕТ</h2>
        <a className={`${location.pathname == "/my/schedule/doctors" || location.pathname == "/my/schedule/services" || location.pathname == "/my/history/doctors" || location.pathname == "/my/history/services" ? "sidebar-active" : ""}`} onClick={() => { navigate("/my/schedule/doctors") }}>Запланированные приемы</a>
        {/* <a className= {`${location.pathname == "/myadmin/cliniccreate" ? "sidebar-active" : ""}`} onClick={() => { navigate("/myadmin/cliniccreate") }}>Мои отзывы</a> */}
        {/* <a  onClick={() => { navigate("/clinics") }}>Расписание</a> */}
        <a onClick={() => navigate("/")}>На главную</a>
        <a onClick={() => closeConfirmModal.openModal("/")}>Выйти</a>
    
      </div>
      <CloseModal isOpen={closeConfirmModal.isOpen} closeModal={closeConfirmModal.closeModal} />
      <Outlet />

    </div>

  )



}