import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authStorage } from "../../../../authStorage";
import { useDirty } from "../../../../hooks/useDirty";
import "./ClinicCreate.scss";
import { UploadAndDisplayImage } from "../../../../components/UploadAndDisplayImage";

function getEmailError(email: string) {
  if (email == "")
    return "Email не должен быть пустым.";
  return null;
}

function getPassError(password: string) {
  if (password == "")
    return "Пароль обязателен.";
  if (password.length < 4)
    return "Пароль должен быть не менее 4 символов.";
  return null;
}
function getFamError(fam: string, isDirty: boolean) {
  if (isDirty && !fam)
  {
    return "Поле обязательно для заполнения.";
  }
  return null;
}

function getNameError(name: string, isDirty: boolean) {
  if (isDirty && !name)
    return "Поле обязательно для заполнения.";
  return null;
}
function getOtchError(otch: string, isDirty: boolean) {
  if (isDirty && !otch)
    return "Поле обязательно для заполнения.";
  return null;
}

function getSpecialtyError(specialty: string, isDirty: boolean) {
  if (isDirty && !specialty)
    return "Поле обязательно для заполнения.";
  return null;
}

export function ClinicCreate() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [fam, setFam, isFamDirty] = useDirty(""); // dirty для того чтобы отслеживать модиф ли пользватель
  const [name, setName, isNameDirty] = useDirty("");
  const [otch, setOtch, isOtchDirty] = useDirty("");
  const [specialty, setSpecialty, isSpecialtyDirty] = useDirty("");
  const [photoFile, setPhotoFile] = useState<null | File>(null);

  const [isButtonClicked, setisButtonClicked] = useState(false);

  const emailErrorMessage = getEmailError(email);
  const passErrorMessage = getPassError(password);
  const famErrorMessage = getFamError(fam, isFamDirty); //добавляем isDirty как параметр функции 
  const nameErrorMessage = getNameError(name, isNameDirty);
  const otchErrorMessage = getOtchError(otch, isOtchDirty);
  const specialtyErrorMessage = getSpecialtyError(specialty, isSpecialtyDirty);

  //const emailErrorMessage = isButtonClicked ? emailError : null;
  //const passErrorMessage = isButtonClicked ? passError : null;
  const [serverErrorMessage, setServerErrorMessage] = useState("");
  


  
    async function addDoctor() {
      setisButtonClicked(true);
      if (emailErrorMessage || passErrorMessage || famErrorMessage || nameErrorMessage || otchErrorMessage || specialtyErrorMessage) {
        return;
      }
      if (!email || !password || !fam || !name|| !otch || !specialty) {
        alert("не заполнены поля")
        return;
      }
      // const response = await request.post('http://localhost:5000/auth/login').send(JSON.stringify({
      //   email: email,
      //   password: password
      // }))
      const response = await fetch('http://localhost:5000/clinic/addDoctor', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          fam: fam,
          name: name,
          otch: otch,
          specialty: specialty,
          photo: photoFile
        }),
      })


      if (response.status == 401) {
        setServerErrorMessage("Ошибка данных");
        return;
      }
      const data = await response.json();
      alert(JSON.stringify(data));
      // надо еще очистить все поля 
      
    }
    return (
<div>
<div className="card">
    <div className="card-content">
      <span className="card-title">Добавить Доктора</span>
  
      <div className="input-field">
        <label htmlFor="firstName">Имя: <span  className={"red-text"}>*</span></label>
        <input id="firstName" type="text" 
        onChange={event => { setName(event.target.value); setServerErrorMessage("") }} />
        <span className="helper-text red-text">
          {nameErrorMessage}
        </span>
      </div>
  
      <div className="input-field">
        <label htmlFor="lastName">Фамилия: <span  className={"red-text"}>*</span></label>
        <input id="lastName" type="text" 
        onChange={event => { setFam(event.target.value); setServerErrorMessage("") }}/>
        <span className="helper-text red-text">
         {famErrorMessage}
        </span>
      </div>
  
      <div className="input-field">
        <label htmlFor="middleName">Отчество: <span  className={"red-text"}>*</span></label>
        <input id="middleName" type="text"
        onChange={event => { setOtch(event.target.value); setServerErrorMessage("") }} />
        <span className="helper-text red-text">
            {otchErrorMessage}
          </span>
      </div>
  
      <div className="input-field">
        <label htmlFor="specialty">Специальность: <span  className={"red-text"}>*</span></label>
        <input id="specialty" type="text"
        onChange={event => { setSpecialty(event.target.value); setServerErrorMessage("") }} />
        <span className="helper-text red-text">
            {specialtyErrorMessage}
          </span>
      </div>
  

      <div className="input-field">
        <label htmlFor="email">Email: <span  className={"red-text"}>*</span></label>
        <input autoComplete="one-time-code"  id="email" type="email" 
        onChange={event => { setEmail(event.target.value); setServerErrorMessage("") }}/>
        <span className="helper-text red-text">
          {emailErrorMessage}
        </span>
      </div>
  
      <div className="input-field">
        <label htmlFor="password">Пароль: <span  className={"red-text"}>*</span></label>
        <input  autoComplete="one-time-code" id="password" type="password" 
        onChange={event => { setPass(event.target.value); setServerErrorMessage("") }}/>
        <span className="helper-text red-text">
          {passErrorMessage}
        </span>
      </div>
    </div>
  
    <div className="card-action">
      <button  onClick={addDoctor}  className="btn">Добавить</button>
    </div>

    <UploadAndDisplayImage onImageChange={setPhotoFile}/>

    {/* <div className="file-upload">
    <input type="file" accept=".xlsx, .xls" />
    <button>Загрузить Excel</button>
  </div> */}

  </div>

</div>

    )
}