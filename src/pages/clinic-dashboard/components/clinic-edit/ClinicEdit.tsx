import { useNavigate, useParams } from "react-router-dom";
import "./ClinicEdit.scss";
import { useEffect, useState } from "react";
import { useDirty } from "../../../../hooks/useDirty";
type Doctor = {
  doctor_id: string;
  id: string, 
  name: string
  specialty: string
  email: string
}



function getEmailError(email: string, isDirty: boolean) {
  if (isDirty && email == "")
    return "Email не должен быть пустым.";
  return null;
}

function getPassError(password: string, isDirty: boolean) {
  if (isDirty)
  {
   // if (password.length < 4)
   // return "Пароль должен быть не менее 4 символов.";
  }
  return null;
}
function getFamError(fam: string | undefined, isDirty: boolean) {
  if (isDirty && !fam)
  {
    return "Поле обязательно для заполнения.";
  }
  return null;
}

function getNameError(name: string | undefined, isDirty: boolean) {
  if (isDirty && !name)
    return "Поле обязательно для заполнения.";
  return null;
}
function getOtchError(otch: string | undefined, isDirty: boolean) {
  if (isDirty && !otch)
    return "Поле обязательно для заполнения.";
  return null;
}

function getSpecialtyError(specialty: string | undefined, isDirty: boolean) {
  if (isDirty && !specialty)
    return "Поле обязательно для заполнения.";
  return null;
}

export function ClinicEdit() {
  const { doctorId } = useParams();
  //useEffect(() => alert(doctorId), []);
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState<Doctor | null>(null)

  const [email, setEmail, isEmailDirty] = useDirty("");
  const [password, setPass, IsPassDirty] = useDirty("");
  const [fam, setFam, isFamDirty] = useDirty(doctor?.name.split(" ", 3)[0]); // dirty для того чтобы отслеживать модиф ли пользватель
  const [name, setName, isNameDirty] = useDirty(doctor?.name.split(" ", 3)[1]);
  const [otch, setOtch, isOtchDirty] = useDirty(doctor?.name.split(" ", 3)[2]);
  const [specialty, setSpecialty, isSpecialtyDirty] = useDirty(doctor?.specialty);

  const [isButtonClicked, setisButtonClicked] = useState(false);

  const emailErrorMessage = getEmailError(email, isEmailDirty);
  const passErrorMessage = getPassError(password, IsPassDirty);
  const famErrorMessage = getFamError(fam, isFamDirty); //добавляем isDirty как параметр функции 
  const nameErrorMessage = getNameError(name, isNameDirty);
  const otchErrorMessage = getOtchError(otch, isOtchDirty);
  const specialtyErrorMessage = getSpecialtyError(specialty, isSpecialtyDirty);

  //const emailErrorMessage = isButtonClicked ? emailError : null;
  //const passErrorMessage = isButtonClicked ? passError : null;
  const [serverErrorMessage, setServerErrorMessage] = useState("");
  
    async function editDoctor() {
      setisButtonClicked(true);
      if (emailErrorMessage || passErrorMessage || famErrorMessage || nameErrorMessage || otchErrorMessage || specialtyErrorMessage) {
        return;
      }
      // const response = await request.post('http://localhost:5000/auth/login').send(JSON.stringify({
      //   email: email,
      //   password: password
      // }))
      const response = await fetch('http://localhost:5000/clinic/editDoctor', {
        method: 'UPDATE',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          doctorId: doctorId,
          email: email,
          password: password,
          fam: fam,
          name: name,
          otch: otch,
          specialty: specialty
        }),
      })

      if (response.status == 401) {
        setServerErrorMessage("Ошибка данных");
        return;
      }
      const data = await response.json();
      alert(JSON.stringify(data));
      //очистить все поля 
      
    }
  



  

    
 // const [intervalsCount, setIntervalsCount] = useState(1);

  async function fetchDoctors(filter = doctorId) {
    // const response = await request.post('http://localhost:5000/auth/login').send(JSON.stringify({
    //   email: email,
    //   password: password
    // }))
    const response = await fetch('http://localhost:5000/clinic/getDoctorById/?id=' + filter, {
     }) 
     
    const data = await response.json();
    //alert(JSON.stringify(data));
    if (response.status == 404)
    {
        setServerErrorMessage("Врачи не найдены");
        setDoctor(null);
        return;
    }
    else{
        setDoctor(data);
        setServerErrorMessage("");
        //alert(doctor?.name.split(" ", 3))

    }
  }

  // const [splittedName, setSplittedName] = useState([]);
  // setSplittedName(doctor?.name.split(" ", 3))

  useEffect(() => {
    // alert(debouncedValue)
     fetchDoctors()
 }, [])

    return (
<div>
<div className="card">
    <div className="card-content">
    <a className="brand-logo" onClick={() => { navigate("/myclinic/doctor/") }}>&#x2717;</a>
      <h3 className="card-title">Редактировать Доктора {doctor?.name}
</h3>
  
      <div className="input-field">
        <label htmlFor="firstName">Имя:</label>
        <input  autoComplete="one-time-code" id="firstName" type="text" onChange={event => { setName(event.target.value); setServerErrorMessage("") }} defaultValue={doctor?.name.split(" ", 3)[0]}/>
        <span className="helper-text red-text">
          {nameErrorMessage}
        </span>
      </div>
  
      <div className="input-field">
        <label htmlFor="lastName">Фамилия:</label>
        <input autoComplete="one-time-code" id="lastName" type="text" onChange={event => {setFam(event.target.value); setServerErrorMessage("") }} defaultValue={doctor?.name.split(" ", 3)[1]} />
        <span className="helper-text red-text">
          {famErrorMessage}
        </span>
      </div>
  
      <div className="input-field">
        <label htmlFor="middleName">Отчество:</label>
        <input autoComplete="one-time-code" id="middleName" type="text" onChange={event => { setOtch(event.target.value); setServerErrorMessage("") }} defaultValue={doctor?.name.split(" ", 3)[2]}/>
        <span className="helper-text red-text">
           {otchErrorMessage}
          </span>
      </div>
  
      <div className="input-field">
        <label htmlFor="specialty">Специальность:</label>
        <input autoComplete="one-time-code" id="specialty" type="text" onChange={event => { setSpecialty(event.target.value); setServerErrorMessage("") }} defaultValue={doctor?.specialty} />
        <span className="helper-text red-text">
            {specialtyErrorMessage}
          </span>
      </div>
  

      <div className="input-field">
        <label htmlFor="email">Email:</label>
        <input autoComplete="one-time-code" id="email" type="email" onChange={event => { setEmail(event.target.value); setServerErrorMessage("") }} defaultValue={doctor?.email}/>
        <span className="helper-text red-text">
          {emailErrorMessage}
        </span>
      </div>
  
      <div className="input-field">
        <label htmlFor="password">Пароль:</label>
        <input autoComplete="one-time-code" id="password" type="password" onChange={event => { setPass(event.target.value); setServerErrorMessage("") }} defaultValue={""}/>
        <span className="helper-text red-text">
          {passErrorMessage}
        </span>
      </div>
    </div>
  
    <div className="card-action">
      <button onClick={editDoctor} className="btn">Сохранить изменения</button>
    </div>
    <div className="file-upload"> 
  </div>

  </div>

</div>

    )
}