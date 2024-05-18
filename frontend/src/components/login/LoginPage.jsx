import React from 'react'

function LoginPage() {
  return (
    <div className="login-container">
        <div className="login-from">
            <h2 className='title-logo'>SUPMED</h2>
            <form action="">
                <label htmlFor="">ID Card</label>
                <input type="text"/>
                <label htmlFor="">Password</label>
                <input type="text"/>
                <button type="submit">Sign In</button>
            </form>
        </div>
    </div>
  )
}

export default LoginPage