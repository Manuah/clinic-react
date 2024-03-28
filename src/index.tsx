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
// import { LoginPage } from './pages/LoginPage';
// import { LoginPageModal } from './features/login-page/login-page';
// import { Register } from './features/register-page/register-page';

const router = createBrowserRouter([
  { path: "*", Component: Root }, 
]);


// 1️⃣ Changed from App to Root
function Root() {
  // 2️⃣ `BrowserRouter` component removed, but the <Routes>/<Route>
  // component below are unchanged
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}>
        <Route index element={<div></div>} />
        {/* <Route path="login" element={<LoginPageModal/>} />*/}
        <Route path="doctors" element={<DoctorsPage/>} />
        <Route path="services" element={<ServicesPage/>} />
        <Route path="clinics" element={<ClinicsPage/>} />
      </Route>
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
      </Route>

     {/* ЛК ВРАЧА*/}
     <Route path="/mydoctor" element={<ClinicPage/>}>
        <Route index element={<ClinicPage/>} />
        <Route path="schedule" element={<ClinicDoctors/>} />
        <Route path="patients" element={<ClinicCreate/>} />
        {/* <Route path="schedule/:doctorId" element={<ClinicSchedule/>} />
        <Route path="edit/:doctorId" element={<ClinicEdit/>} /> */}
      </Route>

      {/* ЛК ПАЦИЕНТА*/}
     <Route path="/mydoctor" element={<ClinicPage/>}>
        <Route index element={<ClinicPage/>} />
        <Route path="schedule" element={<ClinicDoctors/>} />
        <Route path="patients" element={<ClinicCreate/>} />
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
