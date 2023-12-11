import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header'
import LoginPage from './components/login/LoginPage';
import Home from './components/home/Home';
import Data from './components/data/Data';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='App'>
      <Header />
      {/* <LoginPage /> */}
      <Home />
    </div>
  );
}

export default App
