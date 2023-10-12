import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Headers from './components/header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FooterS from './components/footer';
import Vista1 from './views/vista1';
import MyPdfViewer from './views/aviso';
import About from './views/about';
import Encript from './views/Encript';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Encript />,
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/aviso_de_privacidad",
    element:<MyPdfViewer/>
  },
  {
    path:"/encrypt",
    element:<Encript/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Headers />
      <RouterProvider router={router} />
      <FooterS />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
