import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header'
import LoginPage from './components/login/LoginPage';
import Home from './components/home/Home';
import Data from './components/data/Data';
import { BrowserRouter, Routes , Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>

      {/* <Home /> */}
    </BrowserRouter>
  );
}

export default App
