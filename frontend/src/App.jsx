import React from 'react'
import './App.css'
import Header from './components/header/Header'
import LoginPage from './components/login/LoginPage';
import Home from './components/home/Home';
import Data from './components/data/Data';
import DataNotFoundPage from './components/DataNotFoundPage';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <Outlet/>
      {/* <Data/> */}
      {/* <LoginPage/> */}
      {/* <DataNotFoundPage/> */}
    </div>
  );
}

export default App
