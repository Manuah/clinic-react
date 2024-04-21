import React, { ChangeEvent, ReactNode, useEffect, useState } from 'react';
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
import { ServiceCardContinue } from './ServiceCard/ServiceCardContinue';
import { DoctorCardContinue } from './DoctorCard/DoctorCardContinue';

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
type Services = {
  id_services: string,
  title: string
}  
type Doctors = {
  doctor_id: string,
  name: string, 
  specialty: string
}  

type AppTimes = {
  id_time: string,
  start_time: string, 
  end_time: string
}  

type Shedules = {
  schedule_id: string,
  date: string, 
  start_time: string, 
  end_time: string
}  
type ServiceById = {
  id_services: string, 
  title: string
}

//const timeRangesInitialValue: Shedules[] = [{date: "", start_time: "", end_time: ""}, {date: "", start_time: "", end_time: ""}];
//export const [chosenClinicItem, setChosenClinicItem] = useState(false);
export function ContinueRegisterService() {
  console.log("ContinueRegisterService");
  const navigate = useNavigate();
  const location = useLocation();
  const closeConfirmModal = useModal();
  const { id, type } = useParams();
 // const [chosenClinicItem, setChosenClinicItem] = useState(false)
  // const [blogs, setBlogs] = useState<Blog[]>([])

  // function openRegister() {
  //   loginModal.closeModal();
  //   registerModal.openModal(loginModal.pathToRedirect);
  //   return
  // }

  const [chosenClinic, setChosenClinic] = useState("");
  const [chosenClinicId, setChosenClinicId] = useState("");

  
  const [chosenService, setChosenService] = useState("");
  const [chosenServiceId, setChosenServiceId] = useState("");

  const [chosenDoctor, setChosenDoctor] = useState("");
  const [chosenDoctorId, setChosenDoctorId] = useState<string | undefined>("");

  const [chosenSheduleId, setChosenSheduleId] = useState("");

  const [chosenTimeId, setChosenTimeId] = useState("");


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
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    setServerErrorMessage("")
  }
  const [title, setTitle] = useState("")
  const [doctorName, setDoctorName] = useState("")
//const [serviceById, setServiceById] = useState<ServiceById[]>([])
  const [clinic, setClinic] = useState<Clinics[]>([])
  const [service, setService] = useState<Services[]>([])
  const [doctors, setDoctors] = useState<Doctors[]>([])
  const [shedules, setShedules] = useState<Shedules[]>([])
  const [value, setValue] = useState<string>('')
  const [appTimes, setAppTimes] = useState<AppTimes[]>([])

  const [problem, setProblem] = useState<string>('')
  const debouncedValue = useDebounce<string>(value, 500) //для задержки при вводе фильтра

  async function render(debouncedValue: string) {
  if (type == "service"){
    fetchClinicForRegister(debouncedValue); fetchServiceById(); getTimesService()
    }
  if (type == "clinicService"){
    fetchServiceForRegister(debouncedValue); fetchClinicById(); getTimesService()
    }
  if (type == "clinicDoctor"){
    fetchDoctorForRegister(debouncedValue); fetchClinicById();
    }
  if (type == "doctor"){
    fetchDoctorById(); setChosenDoctorId(id);
    }
  }

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

  async function fetchClinicForRegister(filter = '') {
    // const response = await request.post('http://localhost:5000/auth/login').send(JSON.stringify({
    //   email: email,
    //   password: password
    // }))
    const response = await fetch(`http://localhost:5000/clinicsPublic/getClinicsByService?id=${id}&filter=${filter}`, {
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

  async function fetchServiceForRegister(filter = '') {
    // const response = await request.post('http://localhost:5000/auth/login').send(JSON.stringify({
    //   email: email,
    //   password: password
    // }))
    const response = await fetch(`http://localhost:5000/service/getServiceByClinic?id=${id}&filter=${filter}`, {
    })

    const data = await response.json();
    //alert(JSON.stringify(data));
    if (response.status == 404) {
      setServerErrorMessage("Услуги не найдены");
      setService([]);
      return;
    }
    else {
      setService(data)
        ;
    }
  }

  
  async function fetchDoctorForRegister(filter = '') {
    // const response = await request.post('http://localhost:5000/auth/login').send(JSON.stringify({
    //   email: email,
    //   password: password
    // }))
    const response = await fetch(`http://localhost:5000/doctors/getDoctorByClinic?id=${id}&filter=${filter}`, {
    })

    const data = await response.json();
    //alert(JSON.stringify(data));
    if (response.status == 404) {
      setServerErrorMessage("Врачи не найдены");
      setDoctors([]);
      return;
    }
    else {
      setDoctors(data)
        ;
    }
  }


  async function fetchClinicById(filter = id) {
    // const response = await request.post('http://localhost:5000/auth/login').send(JSON.stringify({
    //   email: email,
    //   password: password
    // }))
    const response = await fetch('http://localhost:5000/clinicsPublic/getClinicByIdLanding/?id=' + filter, {
     }) 
     
    const data = await response.json();
    //alert(JSON.stringify(data));
    if (response.status == 404)
    {
        setServerErrorMessage("Поликлиника не найдена");
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
//достать по айдишнику имя и айди клиники 

  async function fetchDoctorById(filter = id) {
    // const response = await request.post('http://localhost:5000/auth/login').send(JSON.stringify({
    //   email: email,
    //   password: password
    // }))
    const response = await fetch('http://localhost:5000/doctors/getDoctorById/?id=' + filter, {
     }) 
     
    const data = await response.json();
    //alert(JSON.stringify(data));
    if (response.status == 404)
    {
        setServerErrorMessage("Врач не найден");
        setDoctors([])
        //setServiceById([]);
        return;
    }
    if (response.ok) {
      setDoctors(data); 
      setDoctorName(data[0].name)
      //setServiceById(data);
       // setTitle(data);
    }
  }

  async function fetchShedulesById(id: string | undefined) {
    // const response = await request.post('http://localhost:5000/auth/login').send(JSON.stringify({
    //   email: email,
    //   password: password
    // }))
    if (!id){
      return
    }
    const response = await fetch('http://localhost:5000/doctors/getSchedules/?id=' + id + "&isBooked=" + false, {
     }) 
     
    const data = await response.json();
    //alert(JSON.stringify(data));
    if (response.status == 404)
    {
        setServerErrorMessage("Расписание для данного врача не найдено");
       setShedules([]);
        //setServiceById([]);
        return;
    }
    if (!response.ok) {
      setServerErrorMessage("Ошибка");
      setShedules([]);
    }
    else{
        setShedules(data);
        setServerErrorMessage("")
      //setServiceById(data);
       // setTitle(data);
    }
  }

  async function changeClinic(id:string, name:string) {
    setChosenClinic(name);
    setChosenClinicId(id);
  }

  async function changeDoctor(id:string, name:string) {
    setChosenDoctor(name);
    setChosenDoctorId(id);
    }

    
  async function changeShedule(id:string) {
    console.log(id);
    setChosenSheduleId(id);
    }

    async function changeAppTimeService(id:string) {
      console.log("changeAppTimeService", id);
      setChosenTimeId(id);
      }

  async function changeService(id:string, name:string) {
    setChosenService(name);
    setChosenServiceId(id);
    }

  useEffect(() => {
    // alert(debouncedValue)
    // fetchClinicForRegister(debouncedValue); fetchServiceById(); 
    render(debouncedValue)
  }, [debouncedValue])

  useEffect(() => {
    // alert(debouncedValue)
    // fetchClinicForRegister(debouncedValue); fetchServiceById(); 
    fetchShedulesById(chosenDoctorId)
  }, [chosenDoctorId])

  async function createServiceAppointment() {

    if (!chosenClinic && type == "service" || !chosenService && type == "clinicService") {
      alert("Не заполнены поля")
      return;
    }
    // const response = await request.post('http://localhost:5000/auth/login').send(JSON.stringify({
    //   email: email,
    //   password: password
    // }))
    if (type == "service")
      {
        const response = await fetch('http://localhost:5000/patient/createAppointmentService', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            patient_id: authStorage.userId,
            policlinic_id: chosenClinicId,
            service_id: id, 
            id_time: chosenTimeId
          }),
        })

        if (response.status == 401) {
          setServerErrorMessage("Ошибка данных");
          return;
        }
        if (response.ok){
          const data = await response.json();
          alert("Запись прошла успешно!");
          navigate("/")
        }

      }
    if (type == "clinicService")
      {
        const response = await fetch('http://localhost:5000/patient/createAppointmentService', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            patient_id: authStorage.userId,
            policlinic_id: id,
            service_id: chosenServiceId, 
            id_time: chosenTimeId
          }),
        })
        if (response.status == 401) {
          setServerErrorMessage("Ошибка данных");
          return;
        }
        if (response.ok){
          const data = await response.json();
          alert("Запись прошла успешно!");
          navigate("/")
        }
     
        // надо еще очистить все поля 
      }
      
  }

  async function createDoctorAppointment() {

    if ( !chosenSheduleId || !problem ) { 
      alert("Не заполнены поля")
      return;
    }
    // const response = await request.post('http://localhost:5000/auth/login').send(JSON.stringify({
    //   email: email,
    //   password: password
    // }))
        const response = await fetch('http://localhost:5000/patient/createAppointmentDoctor', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            patient_id: authStorage.userId,
            schedule_id: chosenSheduleId,
            problem_description: problem
          }),
        })

        if (response.status == 401) {
          setServerErrorMessage("Ошибка данных");
          return;
        } 
        if (response.ok)
          {
            const data = await response.json();
            alert("Запись прошла успешно!");
            navigate("/")
            // надо еще очистить все поля 
          }
      
  }

  // getTimesService
  async function getTimesService() {
    // const response = await request.post('http://localhost:5000/auth/login').send(JSON.stringify({
    //   email: email,
    //   password: password
    // }))
    const response = await fetch('http://localhost:5000/service/getTimesService', {
     }) 
     
    const data = await response.json();
    //alert(JSON.stringify(data));
    if (response.status == 404)
    {
        setServerErrorMessage("Расписание не найдено");
        setAppTimes([])
        //setServiceById([]);
        return;
    }
    if (response.ok) {
      setAppTimes(data); 
      console.log(appTimes);
      //setServiceById(data);
       // setTitle(data);
    }
  }


if (type == "service") {
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
            <div className="search-container">
                <input onChange={handleChange} value={value} type="text" id="searchInput" className="search-input" placeholder="Начните вводить" />
                    <img id="searchButton" className="search-button" src="https://palantinnsk.ru/local/templates/palantinnsk/assets/search.png" alt="Search" />
            </div>
            <br></br>
            <span>{serverErrorMessage}</span>
              {clinic.map(clinic => <ClinicCardContinue clinicName={clinic.title} clinicId={clinic.id_policlinics} clinicAddress={clinic.address} onConfirm={changeClinic} chosenClinicId={chosenClinicId}/>)}
              {/* вытаскиваем массив и распределяем по карточкам */}
            </div>
            <div className='column-right'>
              <div>
                <h2 className={ "card-title" }>Продолжение записи</h2>
                <div className={ "red-text" }>{serverErrorMessage}</div>
                <p>Чтобы записаться на услугу, выберите больницу</p>
                {/* <a className={ "brand-logo" } onClick={props.closeModal}>&#x2717;</a> */}
                <div className={ "card-content" }>
                  <div className={ "input-field-BIG" }>
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
                  <div className={ "input-field-BIG" }>
                    <label htmlFor="password">Услуга:</label>
                    <input disabled name="service" id="service" value={title} onChange={event => { 

                      // setPass(event.target.value); setServerErrorMessage("") 
                      }} />
                    <span

                      className={ "red-text" }
                    >
                    </span>
                  </div>
                  <p>Выберите время</p>
                  <span>{serverErrorMessage}</span>

{/* //ВЫБИРАТЬ ДАТУ ВЫПАДАЮЩИМ СПИСКОМ И ПОТОМ ОТ НЕЕ ВЫВОДИТЬ СКЕДУЛИ */}

                  {appTimes?.map(appTime => {
                    console.log(appTime.start_time)
                  return (
                    <div className={`${chosenTimeId == appTime.id_time ? "service-active" : "service"}`}>
                      <h2>
                        {appTime.start_time}  :  {appTime.end_time}
                      </h2>
                      <button onClick={() => changeAppTimeService(appTime.id_time)} >Выбрать время</button>
                    </div>
                  )
                })}

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
if (type == "clinicService") {
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
          <div className="search-container">
              <input onChange={handleChange} value={value} type="text" id="searchInput" className="search-input" placeholder="Начните вводить" />
                  <img id="searchButton" className="search-button" src="https://palantinnsk.ru/local/templates/palantinnsk/assets/search.png" alt="Search" />
          </div>
          <br></br>
          <span>{serverErrorMessage}</span>
            {service.map(service => <ServiceCardContinue serviceName={service.title} serviceId={service.id_services} onConfirm={changeService} chosenServiceId={chosenServiceId}/>)}
            {/* вытаскиваем массив и распределяем по карточкам */}
          </div>
          <div className='column-right'>
            <div>
              <h2 className={ "card-title" }>Продолжение записи</h2>
              <div className={ "red-text" }>{serverErrorMessage}</div>
              <p>Чтобы записаться, выберите услугу</p>
              {/* <a className={ "brand-logo" } onClick={props.closeModal}>&#x2717;</a> */}
              <div className={ "card-content" }>


                <div className={ "input-field-BIG" }>
                  <label htmlFor="email">Клиника:</label>
                  <input name="clinic" id="clinic" value={title} disabled={true} required onChange={event => {
                   
                  }} />
                  <span

                    className={ "red-text" }
                  >
                  </span>

                </div>

                <div className={ "input-field-BIG" }>
                  <label htmlFor="password">Услуга:</label>
                  <input disabled name="service" id="service" value={chosenService} required onChange={event => {
                    setChosenService(event.target.value)
                    // setEmail(event.target.value);
                    setServerErrorMessage("")
                  }} />
                  <span

                    className={ "red-text" }
                  >
                  </span>
                </div>

                <p>Выберите время</p>
                  <span>{serverErrorMessage}</span>

{/* //ВЫБИРАТЬ ДАТУ ВЫПАДАЮЩИМ СПИСКОМ И ПОТОМ ОТ НЕЕ ВЫВОДИТЬ СКЕДУЛИ */}

                  {appTimes?.map(appTime => {
                    console.log(appTime.start_time)
                  return (
                    <div className={`${chosenTimeId == appTime.id_time ? "service-active" : "service"}`}>
                      <h2>
                        {appTime.start_time}  :  {appTime.end_time}
                      </h2>
                      <button onClick={() => changeAppTimeService(appTime.id_time)} >Выбрать время</button>
                    </div>
                  )
                })}

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
//ИСКАТЬ ВРАЧА 
//ПО АЙДИ КЛИНИКУ 
//ПРИ ВЫБОРЕ ВРАЧА (КОГДА !!CHOSENDOCTOR) ВЫЗЫВАТЬ ФУНКЦИЮ ВЫЗОВА СКЕДУЛЕЙ 
//ДОЛЖЕН БЫТЬ DOCTOR ID И ДОЛЖЕН БЫТЬ FALSE ТОЖЕ ЧРЕЕЗ МАП
if (type == "clinicDoctor") {
  // console.log("shedules");
  // console.log(shedules);
  return (
    <div>
      <nav>
        <div className="nav-wrapper grey darken-1">
          <a onClick={() => navigate("/")} className="brand-logo">Aegle2
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
            <div className="search-container">
                <input onChange={handleChange} value={value} type="text" id="searchInput" className="search-input" placeholder="Начните вводить" />
                    <img id="searchButton" className="search-button" src="https://palantinnsk.ru/local/templates/palantinnsk/assets/search.png" alt="Search" />
            </div>
            <br></br>
            <span>{serverErrorMessage}</span>
              {doctors.map(doctor => <DoctorCardContinue doctorId={doctor.doctor_id} doctorName={doctor.name} doctorSpecialty={doctor.specialty} onConfirm={changeDoctor} chosenDoctorId={chosenDoctorId}/>)}
              {/* вытаскиваем массив и распределяем по карточкам */}
            </div>
            <div className='column-right'>
              <div>
                <h2 className={ "card-title" }>Продолжение записи</h2>
                <div className={ "red-text" }>{serverErrorMessage}</div>
                <p>Чтобы записаться, выберите врача</p>
                {/* <a className={ "brand-logo" } onClick={props.closeModal}>&#x2717;</a> */}
                <div className={ "card-content" }>

                  <div className={ "input-field-BIG" }>
                    <label htmlFor="email">Клиника:</label>
                    <input name="clinic" id="clinic" value={title} disabled required onChange={event => {
                  
                    }} />
                    <span
  
                      className={ "red-text" }
                    >
                    </span>
  
                  </div>
                  <div className={ "input-field-BIG" }>
                    <label htmlFor="password">Врач:</label>
                    <input disabled name="service" id="service" value={chosenDoctor} required onChange={event => {
                      // setChosenDoctor(event.target.value)
                      // setEmail(event.target.value);
                      setServerErrorMessage("")
                    }} />
                    <span
  
                      className={ "red-text" }
                    >
                    </span>
                  </div>
                  <p>Опишите свою проблему</p>
                  <textarea className= "input_text" onChange={event => { setProblem(event.target.value) }}  
           id="endTime" name="endTime" required/>
                  <p>Выберите время</p>
                  <span>{serverErrorMessage}</span>

{/* //ВЫБИРАТЬ ДАТУ ВЫПАДАЮЩИМ СПИСКОМ И ПОТОМ ОТ НЕЕ ВЫВОДИТЬ СКЕДУЛИ */}

                  {shedules?.map(shedule => {
                  return (
                    <div className={`${chosenSheduleId == shedule.schedule_id ? "service-active" : "service"}`}>
                      <h2>{shedule.date}</h2>
                      <p>
                        {shedule.start_time}  :  {shedule.end_time}
                      </p>
                      <button onClick={() => changeShedule(shedule.schedule_id)} >Выбрать время</button>
                    </div>
                  )
                })}

              {/* вытаскиваем массив и распределяем по карточкам */}
  
                  <button onClick={createDoctorAppointment}>Записаться на услугу</button>
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
  //ВРАЧИ
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
            {/* <div className="search-container">
                <input onChange={handleChange} value={value} type="text" id="searchInput" className="search-input" placeholder="Начните вводить" />
                    <img id="searchButton" className="search-button" src="https://palantinnsk.ru/local/templates/palantinnsk/assets/search.png" alt="Search" />
            </div> */}
            <br></br>
            <span>{serverErrorMessage}</span>
              {doctors.map(doctor => <DoctorCardContinue doctorId={doctor.doctor_id} doctorName={doctor.name} doctorSpecialty={doctor.specialty} onConfirm={changeDoctor} chosenDoctorId={chosenDoctorId}/>)}
              {/* вытаскиваем массив и распределяем по карточкам */}

              <div className={ "input-field-BIG" }>
                    <label htmlFor="password">Врач:</label>
                    <input disabled name="service" id="service" value={doctorName} required onChange={event => {
                      // setChosenDoctor(event.target.value)
                      // setEmail(event.target.value);
                      setServerErrorMessage("")
                    }} />
                    <span
  
                      className={ "red-text" }
                    >
                    </span>
                  </div>
            </div>
            
            <div className='column-right'>
              <div>
                <h2 className={ "card-title" }>Продолжение записи</h2>
                <div className={ "red-text" }>{serverErrorMessage}</div>
                {/* <a className={ "brand-logo" } onClick={props.closeModal}>&#x2717;</a> */}
                <div className={ "card-content" }>

                  {/* <div className={ "input-field-BIG" }>
                    <label htmlFor="email">Клиника:</label>
                    <input name="clinic" id="clinic" value={title} disabled required onChange={event => {
                  
                    }} />
                    <span
  
                      className={ "red-text" }
                    >
                    </span>
  
                  </div> */}

                  <p>Опишите свою проблему</p>
                  <textarea className= "input_text" onChange={event => { setProblem(event.target.value) }}  
           id="endTime" name="endTime" required/>
                  <p>Выберите время</p>
                  <span>{serverErrorMessage}</span>

{/* //ВЫБИРАТЬ ДАТУ ВЫПАДАЮЩИМ СПИСКОМ И ПОТОМ ОТ НЕЕ ВЫВОДИТЬ СКЕДУЛИ */}

                  {shedules?.map(shedule => {
                  return (
                    <div className={`${chosenSheduleId == shedule.schedule_id ? "service-active" : "service"}`}>
                      <h2>{shedule.date}</h2>
                      <p>
                        {shedule.start_time}  :  {shedule.end_time}
                      </p>
                      <button onClick={() => changeShedule(shedule.schedule_id)} >Выбрать время</button>
                    </div>
                  )
                })}

              {/* вытаскиваем массив и распределяем по карточкам */}
  
                  <button onClick={createDoctorAppointment}>Записаться на услугу</button>
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
