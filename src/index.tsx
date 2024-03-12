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
        <Route path="/doctors" element={<DoctorsPage/>} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/clinics" element={<ClinicsPage/>} />
      </Route>
      <Route path="register" element={<div>Окно регистрации</div>}/> 
      <Route path="/about/*" element={<div>About</div>} />
      <Route path="/my" element={<div>Мой личный кабинет пациента</div>} />
      <Route path="/myadmin" element={<AdminPage/>}>
        <Route index element={<AdminCreate/>} />
        <Route path="/myadminclinic" element={<AdminClinics/>} />
        <Route path="/myadmindoctorcreate" element={<AdminCreate/>} />
      </Route>
      <Route path="/mydoctor" element={<div>Мой личный кабинет врача</div>} />
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
