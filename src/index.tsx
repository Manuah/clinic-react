import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import { LandingPage } from './LandingPage';

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
        <Route path="login" element={<div>Login</div>}/>
        <Route path="register" element={<div>register</div>}/>
      </Route>
      <Route path="/about/*" element={<div>About</div>} />
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
