import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import { LandingPage } from './LandingPage';
import { DoctorsPage } from './pages/doctors-page/DoctorsPage';
import { ServicesPage } from './pages/services-page/ServicesPage';
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
        <Route index element={<div>index</div>} />
        {/* <Route path="login" element={<LoginPageModal/>} />
        <Route path="register" element={<Register/>}/> */}
        <Route path="/doctors" element={<DoctorsPage/>} />
        <Route path="/services" element={<ServicesPage/>} />
      </Route>



      <Route path="/about/*" element={<div>About</div>} />
      <Route path = "/patient" element = {<div> Patient</div>}/>
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
