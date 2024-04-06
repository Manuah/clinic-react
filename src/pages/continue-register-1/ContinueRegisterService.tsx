import React, { ReactNode, useEffect, useState } from 'react';
import logo from './logo.svg';
import './ContinueRegisterService.scss';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { authStorage } from '../../authStorage';
import useModal from '../../components/Modal/useModal';
import { CloseModal } from '../../features/close-modal/close-modal';
import { LoginModal } from '../../features/login-modal/login-modal';
import { RegisterModal } from '../../features/register-modal/register-modal';
import { isPropertySignature } from 'typescript';
import { useDirty } from '../../hooks/useDirty';
import { useDebounce } from '../../hooks/useDebounce';
import { ClinicCard } from '../clinics-page/ClinicsCard/ClinicsCard';
import { ClinicCardContinue } from './ClinicsCard/ClinicCardContinue';

//import { Button, Modal, ModalBody } from "reactstrap";

/*const MyModal = ({ children, trigger }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      {React.cloneElement(trigger, { onClick: toggle })}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>{children}</ModalBody>
      </Modal>
    </div>
  );
}; */


// function logOut() {
//   if (window.confirm("Вы уверены, что хотите выйти?") ){
//     authStorage.token = ""; 
//     authStorage.userName = "";
//     window.location.href = "/";
//   }
// }

// interface Props {
//  service_id: string; 
//  service_name: string
// }
type Clinics = {
  id_policlinics: string,
  title: string,
  address: string
}  
type ServiceById = {
  id_services: string, 
  title: string
}
//export const [chosenClinicItem, setChosenClinicItem] = useState(false);
export function ContinueRegisterService() {
  const navigate = useNavigate();
  const location = useLocation();
  const closeConfirmModal = useModal();
  const { id, type } = useParams();
  // const [blogs, setBlogs] = useState<Blog[]>([])

  // function openRegister() {
  //   loginModal.closeModal();
  //   registerModal.openModal(loginModal.pathToRedirect);
  //   return
  // }

  const [chosenClinic, setChosenClinic] = useState("");
  
  const [chosenClinicId, setChosenClinicId] = useState("");


  // const [address, setAddress, isAddressDirty] = useDirty("");
  // const [phone, setPhone, isPhoneDirty] = useDirty("");
  // const [workHours, setWorkHours, isWorkHoursDirty] = useDirty("");
  // const [photoFile, setPhotoFile] = useState<null | File>(null);

  // const [isButtonClicked, setisButtonClicked] = useState(false);

  // const nameErrorMessage = getNameError(name, isNameDirty);
  // const addressErrorMessage = getAddressError(address, isAddressDirty);
  // const phoneErrorMessage = getPhoneError(phone, isPhoneDirty);
  // const hoursErrorMessage = getWorkHoursError(workHours, isWorkHoursDirty);

  //const emailErrorMessage = isButtonClicked ? emailError : null;
  //const passErrorMessage = isButtonClicked ? passError : null;
  const [serverErrorMessage, setServerErrorMessage] = useState("");
  //const [timeRanges, setTimeRanges] = useState<BlogPost[]>(timeRangesInitialValue);



  // async function fetchBlogs(filter = clinicId) {
  //   // const response = await request.post('http://localhost:5000/auth/login').send(JSON.stringify({
  //   //   email: email,
  //   //   password: password
  //   // }))
  //   const response = await fetch('http://localhost:5000/clinicsPublic/getBlogs/?id=' + filter, {
  //   })

  //   const data = await response.json();
  //   //alert(JSON.stringify(data));
  //   if (response.status == 404) {
  //     setServerErrorMessage("Блоки не найдены");
  //     setBlogs([]);
  //     return;
  //   }
  //   else {
  //     setBlogs(data);
  //     setServerErrorMessage("");
  //   }
  // }


  // async function fetchClinic(filter = clinicId) {
  //   // const response = await request.post('http://localhost:5000/auth/login').send(JSON.stringify({
  //   //   email: email,
  //   //   password: password
  //   // }))
  //   const response = await fetch('http://localhost:5000/clinicsPublic/getClinicByIdLanding/?id=' + filter, {
  //   })

  //   const data = await response.json();
  //   //alert(JSON.stringify(data));
  //   if (response.status == 404) {
  //     setServerErrorMessage("Врачи не найдены");
  //     // setDoctor(null);
  //     return;
  //   }
  //   else {
  //     //   setDoctor(data);
  //     setServerErrorMessage("");
  //     setName(data.title)
  //     setPhone(data.phone)
  //     setAddress(data.address)
  //     setWorkHours(data.work_hours)
  //     //alert(doctor?.name.split(" ", 3))

  //   }
  // }


  // async function book() {
  //   if (authStorage.token == "") {
  //     loginModal.openModal("/my")//после авторизации идем на продолжение записи
  //   }
  //   else {
  //     navigate("/my")//сразу переходим на страницу записи
  //   }
  // }
  // useEffect(() => {
  //   // alert(id)
  //   //fetchClinic(); fetchBlogs()
  // }, [])
  const [title, setTitle] = useState("")
//const [serviceById, setServiceById] = useState<ServiceById[]>([])
  const [clinic, setClinic] = useState<Clinics[]>([])
  const [value, setValue] = useState<string>('')
  const debouncedValue = useDebounce<string>(value, 500) //для задержки при вводе фильтра

  async function fetchServiceById(filter = id) {
    // const response = await request.post('http://localhost:5000/auth/login').send(JSON.stringify({
    //   email: email,
    //   password: password
    // }))
    const response = await fetch('http://localhost:5000/service/getServiceById/?id=' + filter, {
     }) 
     
    const data = await response.json();
    //alert(JSON.stringify(data));
    if (response.status == 404)
    {
        setServerErrorMessage("Услуга не найдена");
        setTitle("")
        //setServiceById([]);
        return;
    }
    else{
      setTitle(data.title)
      //setServiceById(data);
       // setTitle(data);
    }
  }

  async function fetchClinicForRegister(filter = id) {
    // const response = await request.post('http://localhost:5000/auth/login').send(JSON.stringify({
    //   email: email,
    //   password: password
    // }))
    const response = await fetch('http://localhost:5000/clinicsPublic/getClinicsByService?filter=' + filter, {
    })

    const data = await response.json();
    //alert(JSON.stringify(data));
    if (response.status == 404) {
      setServerErrorMessage("Поликлиники не найдены");
      setClinic([]);
      return;
    }
    else {
      setClinic(data)
        ;
    }
  }

  async function changeClinic(id:string, name:string) {
  setChosenClinic(name);
  setChosenClinicId(id);
  }

  useEffect(() => {
    // alert(debouncedValue)
    fetchClinicForRegister(); fetchServiceById();
  }, [])

  async function createServiceAppointment() {

    if (!chosenClinic) {
      alert("Не заполнены поля")
      return;
    }
    // const response = await request.post('http://localhost:5000/auth/login').send(JSON.stringify({
    //   email: email,
    //   password: password
    // }))
    const response = await fetch('http://localhost:5000/patient/createAppointmentService', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        patient_id: authStorage.userId,
        policlinic_id: chosenClinicId,
        service_id: id
      }),
    })

    if (response.status == 401) {
      setServerErrorMessage("Ошибка данных");
      return;
    }
    const data = await response.json();
    alert("m");
    // надо еще очистить все поля 
  }



  return (
    <div>
      <nav>
        <div className="nav-wrapper grey darken-1">
          <a onClick={() => navigate("/")} className="brand-logo">Aegle
          </a>

          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {/* <li><a onClick={() => { navigate("/login") }}>Вход</a></li>
            <li><a onClick={() => { navigate("/register") }}>Регистрация</a></li> */}

            {/* <button disabled={true} onClick={() => openModal("/")}>Вход</button> */}
            {/* className={`${authStorage.token == "" ? "" : "disabledLink"}`} */}
            <li>
              <a onClick={() => closeConfirmModal.openModal(location.pathname)}>
                Выход
              </a>

              {/* 
              {authStorage.token == "" || authStorage.token == "1" ? (
                <a onClick={() => loginModal.openModal(location.pathname)}>
                  Вход
                </a>
              ) : (
                <a onClick={() => closeConfirmModal.openModal(location.pathname)}>
                  Выход
                </a>
              )} */}

            </li>
          </ul>
        </div>
      </nav>
      <div className="auth-block">
        <div className="landing-container">
          {/* <div>{clinicId}</div> */}
          <div className='container-continue'>
            <div className='column-left'>
              {serverErrorMessage}
              {clinic.map(clinic => <ClinicCardContinue clinicName={clinic.title} clinicId={clinic.id_policlinics} clinicAddress={clinic.address} onConfirm={changeClinic}/>)}
              {/* вытаскиваем массив и распределяем по карточкам */}
            </div>
            <div className='column-right'>
              <div>
                <h2 className={ "card-title" }>Продолжение записи</h2>
                <div className={ "red-text" }>{serverErrorMessage}</div>
                <p>Чтобы записаться на услугу, выберите больницу</p>
                {/* <a className={ "brand-logo" } onClick={props.closeModal}>&#x2717;</a> */}
                <div className={ "card-content" }>
                  <div className={ "input-field" }>
                    <label htmlFor="email">Клиника:</label>
                    <input name="clinic" id="clinic" value={chosenClinic} disabled={true} required onChange={event => {
                      setChosenClinic(event.target.value)
                      // setEmail(event.target.value);
                      setServerErrorMessage("")
                    }} />
                    <span

                      className={ "red-text" }
                    >
                    </span>

                  </div>
                  <div className={ "input-field" }>
                    <label htmlFor="password">Услуга:</label>
                    <input disabled name="service" id="service" value={title} onChange={event => { 

                      // setPass(event.target.value); setServerErrorMessage("") 
                      }} />
                    <span

                      className={ "red-text" }
                    >
                    </span>
                  </div>

                  <button onClick={createServiceAppointment}>Записаться на услугу</button>
                </div>

              </div>
            </div>
          </div>

          <div>
            <CloseModal isOpen={closeConfirmModal.isOpen} closeModal={closeConfirmModal.closeModal} />
          </div>
          {/* <p>
            Мы предлагаем широкий спектр медицинских услуг для обеспечения вашего
            благополучия. Наша команда опытных врачей и персонала стремится
            предоставить высококачественную помощь в комфортных условиях.
          </p>
          <div className="services-container">
            <div className="service">
              <h2>Общая медицина</h2>
              <p>
                Комплексная медицинская помощь для взрослых и детей, включая
                профилактические услуги, регулярные обследования и лечение общих
                заболеваний.
              </p>
            </div>
            <div className="service">
              <h2>Специализированные клиники</h2>
              <p>
                Специализированные клиники по различным медицинским состояниям, где
                работают эксперты в соответствующих областях для оказания
                целенаправленной помощи и лечения.
              </p>
            </div>
            <div className="service">
              <h2>Диагностические услуги</h2>
              <p>
                Современные диагностические услуги, включая лабораторные анализы,
                изображение и передовые диагностические процедуры для точного и
                своевременного выявления заболеваний.
              </p>
            </div>
          </div> */}
        </div>
        <div className="footer">
          <div className="decorative-line"></div>
          <div className="footer-info">
            <div className="contact-info">
              <h3>Contact Us</h3>
              <p><i className="fas fa-envelope"></i>Email: info@aegleclinic.com</p>
              <p><i className="fas fa-phone"></i>Phone: +1 123-456-7890</p>
            </div>
            <div className="social-media">
              <h3>Follow Us</h3>
              <p>
                <i className="fab fa-facebook"></i>Facebook |
                <i className="fab fa-twitter"></i>Twitter |
                <i className="fab fa-instagram"></i>Instagram
              </p>
            </div>
          </div>
          <div className="decorative-line"></div>
          <p>&copy; 2023 Aegle Polyclinic. All rights reserved.</p>
          <p>Designed with ❤️ by Aegle Team</p>
        </div>
      </div>
    </div>

  );
}
