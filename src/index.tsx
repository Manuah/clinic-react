import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import { LandingPage } from './LandingPage';
import { DoctorsPage } from './pages/doctors-page/DoctorsPage';
import { ServicesPage } from './pages/services-page/ServicesPage';
import { ClinicsPage } from './pages/clinics-page/ClinicsPage';
import { AdminPage } from './pages/admin-dashboard/AdminDashboard';
import { AdminClinics } from './pages/admin-dashboard/components/admin-doctors/AdminClinics';
import { AdminCreate } from './pages/admin-dashboard/components/admin-create/AdminCreate';
import { ClinicPage } from './pages/clinic-dashboard/ClinicDashboard';
import { ClinicCreate } from './pages/clinic-dashboard/components/clinic-create/ClinicCreate';
import { ClinicDoctors } from './pages/clinic-dashboard/components/clinic-doctors/ClinicDoctors';
import { ClinicSchedule } from './pages/clinic-dashboard/components/clinic-shedule/ClinicSchedule';
import { ClinicEdit } from './pages/clinic-dashboard/components/clinic-edit/ClinicEdit';
import { ClinicLandingEdit } from './pages/clinic-dashboard/components/clinic-edit-landing/ClinicIndex';
import { AdminCreateClinic } from './pages/admin-dashboard/components/admin-create-clinic/AdminCreateClinic';
import { LandingClinic } from './pages/landing-clinic/LandingClinic';
import { DoctorPage } from './pages/doctor-dashboard/DoctorDashboard';
import { DoctorsSchedule } from './pages/doctor-dashboard/components/doctor-shedule/DoctorSchedule';
import { ClinicServices } from './pages/clinic-dashboard/components/clinic-services/ClinicServices';
import { ClinicServicesEdit } from './pages/clinic-dashboard/components/clinic-services-edit/ClinicServicesEdit';
import { ContinueRegisterService } from './pages/continue-register-1/ContinueRegisterService';
import { DoctorPatient } from './pages/doctor-dashboard/components/doctor-patients/DoctorPatient';
import { PatientPage } from './pages/patient-dashboard/PatientDashboard';
import { PatientSchedule } from './pages/patient-dashboard/components/patient-shedule/PatientSchedule';
import { PatientScheduleDoctor } from './pages/patient-dashboard/components/patient-shedule/PatientScheduleDoctor/PatientScheduleDoctor';
// import { LoginPage } from './pages/LoginPage';
// import { LoginPageModal } from './features/login-page/login-page';
// import { Register } from './features/register-page/register-page';

const router = createBrowserRouter([
  { path: "*", Component: Root }, 
]);


// 1️⃣ Changed from App to Root
function Root() {
  // 2️⃣ `BrowserRouter` component removed, but the <Routes>/<Route>
  // component below are unchanged ContinueRegisterService
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}>
        <Route index element={<div></div>} />
        {/* <Route path="login" element={<LoginPageModal/>} />*/}
        <Route path="doctors" element={<DoctorsPage/>} />
        <Route path="services" element={<ServicesPage/>} />
        <Route path="clinics" element={<ClinicsPage/>} />
      </Route>

      <Route path="/continueRegisterService/:type/:id" element={<ContinueRegisterService/>}/> 

      <Route path="/landing/:clinicId" element={<LandingClinic/>}/> 
      <Route path="register" element={<div>Окно регистрации</div>}/> 
      <Route path="/about/*" element={<div>About</div>} />

      <Route path="/my" element={<div>Мой личный кабинет пациента</div>} />

    {/* ЛК АДМИНА*/}
      <Route path="/myadmin" element={<AdminPage/>}>
       <Route index element={<AdminCreate/>} />
        <Route path="clinics" element={<AdminClinics/>} />
        <Route path="cliniccreate" element={<AdminCreateClinic/>} />
      </Route>
      
    {/* ЛК КЛИНИКИ*/}
      <Route path="/myclinic" element={<ClinicPage/>}>
        <Route index element={<ClinicLandingEdit/>} />
        <Route path="doctor" element={<ClinicDoctors/>} />
        <Route path="create" element={<ClinicCreate/>} />
        <Route path="schedule/:doctorId" element={<ClinicSchedule/>} />
        <Route path="edit/:doctorId" element={<ClinicEdit/>} />
        <Route path="services" element={<ClinicServices/>} />
        <Route path="editServices" element={<ClinicServicesEdit/>} />
      </Route>

     {/* ЛК ВРАЧА*/}
     <Route path="/mydoctor" element={<DoctorPage/>}>
         <Route index element={<DoctorPage/>} />
        <Route path="schedule" element={<DoctorsSchedule/>} />
        <Route path="medinfo/:patientId" element={<DoctorPatient/>} />
        {/* <Route path="patients" element={<DoctorsSchedule/>} /> */}
        {/* <Route path="schedule/:doctorId" element={<ClinicSchedule/>} />
        <Route path="edit/:doctorId" element={<ClinicEdit/>} /> */}
      </Route>

      {/* ЛК ПАЦИЕНТА*/}
     <Route path="/my" element={<PatientPage/>}>
        <Route index element={<PatientPage/>} />
        <Route path="schedule" element={<PatientSchedule/>}>
          <Route path="doctors" element={<PatientScheduleDoctor/>}/>
          <Route path="services" element={<PatientSchedule/>}/>
        </Route>
        <Route path="history" element={<ClinicDoctors/>} />
        <Route path="personalinfo" element={<ClinicCreate/>} />
        <Route path="personalinfoedit" element={<ClinicCreate/>} />
        {/* <Route path="schedule/:doctorId" element={<ClinicSchedule/>} />
        <Route path="edit/:doctorId" element={<ClinicEdit/>} /> */}
      </Route>

    </Routes>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
