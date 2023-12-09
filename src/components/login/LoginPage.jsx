import React from 'react'
import './loginpage.css'

function LoginPage() {
  return (
    <div className='d-flex flex-column align-items-center mt-5 custom-container'>
        <h1 className='custome-text fw-bold'>Login</h1>
        <div className='custom-border'>
            <form className='custom-form'>
                <div className="form-group d-flex flex-column input-box-log custom-main-div-label">
                    <div className="d-flex flex-row">
                        <img src="./public/icon/user_id.png"alt="user-id-icon" className='user-id-icon'/>
                        <label htmlFor="" className='fs-5 fw-normal fw-bold custom-label'>User ID</label>
                    </div>
                    <input type="text"/>
                </div>
                <div className="form-group d-flex flex-column input-box-log custom-main-div-label">
                    <div className="d-flex flex-row">
                        <img src="./public/icon/password.png"alt="password-icon" className='password-icon'/>
                        <label htmlFor="" className='fs-5 fw-normal fw-bold custom-label'>Password</label>
                    </div>
                    <input type="text"/>
                </div>
                <div className="d-grid gap-2">
                    <input type='submit' name="submit" value="Login" className='btn custom-button'/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginPage