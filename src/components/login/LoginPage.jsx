import React , { useState }from 'react'
import './loginpage.css'
import { Link , useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';


function LoginPage() {
    const [values , setValues] = useState({
        userID: '',
        password:''
    })
    const navigate = useNavigate();
    const [errors , setErrors ] = useState({});
    const handleInput = (e) => {
        setValues(prev => ({...prev, [e.target.name]:[e.target.value]}))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validation(values));
        if (errors.userID === "" && errors.password === "") {
            axios.get('http://localhost:8081/doctor', { params: values })
                .then(res => {
                    if (res.data.result === "Success") {
                        navigate('/home')
                    } else {
                        alert("Login failed")
                    }
                })
                .catch(err => console.log(err));
        }
    }
  return (
    <div className='d-flex flex-column align-items-center mt-5 custom-container'>
        <h1 className='custome-text fw-bold'>Login</h1>
        <div className='custom-border'>
            <form className='custom-form' onSubmit={handleSubmit}>
                <div className="form-group d-flex flex-column input-box-log custom-main-div-label">
                    <div className="d-flex flex-row">
                        <img src="./public/icon/user_id.png"alt="user-id-icon" className='user-id-icon'/>
                        <label htmlFor="" className='fs-5 fw-normal fw-bold custom-label'>User ID</label>
                    </div>
                    <input type="text" onChange={handleInput} name="userID"/>
                    {errors.userID && <span className='text-danger'>{errors.userID}</span>}
                </div>
                <div className="form-group d-flex flex-column input-box-log custom-main-div-label">
                    <div className="d-flex flex-row">
                        <img src="./public/icon/password.png"alt="password-icon" className='password-icon'/>
                        <label htmlFor="" className='fs-5 fw-normal fw-bold custom-label'>Password</label>
                    </div>
                    <input type="text" onChange={handleInput} name="password"/>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                <div className="d-grid gap-2">
                    <input type='submit' name="submit" value="Login" className='btn custom-button'/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginPage;