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
import { PatientScheduleService } from './pages/patient-dashboard/components/patient-shedule/PatientScheduleService/PatientScheduleService';
import { PatientHistory } from './pages/patient-dashboard/components/patient-history/PatientHistory';
import { PatientHistoryDoctor } from './pages/patient-dashboard/components/patient-history/PatientHistoryDoctor/PatientHistoryDoctor';
import { PatientHistoryService } from './pages/patient-dashboard/components/patient-history/PatientHistoryService/PatientHistoryService';
import { PatientIndex } from './pages/patient-dashboard/components/patient-info/PatientIndex';
import { PrivateRoute } from './privateRouter';
// import { LoginPage } from './pages/LoginPage';
// import { LoginPageModal } from './features/login-page/login-page';
// import { Register } from './features/register-page/register-page';
// 1- пациент 2 - доктор 3 -клиника 4- админ

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

      <Route path="/continueRegisterService/:type/:id" element={<PrivateRoute Component={ContinueRegisterService} role={"1"}/>}/> 

      <Route path="/landing/:clinicId" element={<LandingClinic/>}/> 

    {/* ЛК АДМИНА*/}
      <Route path="/myadmin" element={<PrivateRoute Component={AdminPage} role={"4"}/>}>
       <Route index element={<PrivateRoute Component={AdminCreate} role={"4"}/>} />
        <Route path="clinics" element={<PrivateRoute Component={AdminClinics} role={"4"}/>} />
        <Route path="cliniccreate" element={<PrivateRoute Component={AdminCreateClinic} role={"4"}/>}/>
      </Route>
      
    {/* ЛК КЛИНИКИ*/}
      <Route path="/myclinic" element={<PrivateRoute Component={ClinicPage} role={"3"}/>}>
        <Route index element={<PrivateRoute Component={ClinicLandingEdit} role={"3"}/>} />
        <Route path="doctor" element={<PrivateRoute Component={ClinicDoctors} role={"3"}/>} />
        <Route path="create" element={<PrivateRoute Component={ClinicCreate} role={"3"}/>} />
        <Route path="schedule/:doctorId" element={<PrivateRoute Component={ClinicSchedule} role={"3"}/>} />
        <Route path="edit/:doctorId" element={<PrivateRoute Component={ClinicEdit} role={"3"}/>} />
        <Route path="services" element={<PrivateRoute Component={ClinicServices} role={"3"}/>} />
        <Route path="editServices" element={<PrivateRoute Component={ClinicServicesEdit} role={"3"}/>} />
      </Route>

     {/* ЛК ВРАЧА*/}
     <Route path="/mydoctor" element={<PrivateRoute Component={DoctorPage} role={"2"}/>}>
         <Route index element={<PrivateRoute Component={DoctorPage} role={"2"}/>} />
        <Route path="schedule" element={<PrivateRoute Component={DoctorsSchedule} role={"2"}/>} />
        <Route path="medinfo/:patientId" element={<PrivateRoute Component={DoctorPatient} role={"2"}/>}/>
        {/* <Route path="patients" element={<DoctorsSchedule/>} /> */}
        {/* <Route path="schedule/:doctorId" element={<ClinicSchedule/>} />
        <Route path="edit/:doctorId" element={<ClinicEdit/>} /> */}
      </Route>

      {/* ЛК ПАЦИЕНТА*/}
     <Route path="/my" element={<PrivateRoute Component={PatientPage} role={"1"}/>}>
        <Route index element={<PrivateRoute Component={PatientIndex} role={"1"}/>} />
        <Route path="schedule" element={<PrivateRoute Component={PatientSchedule} role={"1"}/>}>
          <Route path="doctors" element={<PrivateRoute Component={PatientScheduleDoctor} role={"1"}/>}/>
          <Route path="services" element={<PrivateRoute Component={PatientScheduleService} role={"1"}/>}/>
        </Route>
        <Route path="history" element={<PrivateRoute Component={PatientHistory} role={"1"}/>}>
          <Route path="doctors" element={<PrivateRoute Component={PatientHistoryDoctor} role={"1"}/>}/>
          <Route path="services" element={<PrivateRoute Component={PatientHistoryService} role={"1"}/>}/>
        </Route>
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
