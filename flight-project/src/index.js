import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './routes/About';
import Service from "./routes/Service";
import Contact from "./routes/Contact";

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
      path: "/",
      element: <App/>
  },
  {
      
      path: "/about",
      element: <About/>
  },
  {
     
      path: "/service",
      element: <Service/>
  },
  {
      
      path: "/contact",
      element: <Contact/>
  },
  // {
  //     path: "/signup",
  //     element: <Sign
  // }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
