import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './components/login/LoginPage.jsx';
import Home from './components/home/Home.jsx';
import Protected from './components/Protected.jsx';
import Data from './components/data/Data.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path='/' element={<Home />}/>
      <Route path="login" element={<LoginPage/>}/>
      <Route path='/' element={<Protected />}>
        <Route path="data" element={<Data/>}/>
      </Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
