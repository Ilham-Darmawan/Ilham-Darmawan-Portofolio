// Initialized
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Import Router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Import Component
import Homepage from './component/homepage/homepage';
import Errorhandle from './component/errorhandle/errorhandle';
import Gform from './component/gform/gform';

// Create Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <Errorhandle />
  },
  {
    path: "/Gform",
    element: <Gform />,
    errorElement: <Errorhandle />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
