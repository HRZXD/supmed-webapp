import React from 'react'
import './header.css'

function Header() {
  return (
    <div className="navbar">
        <div className="side-left">
            <h1 className="logo">SUPMED</h1>
            <div className="order-list">
                <p className='list-inside'><a href="#">Home</a></p>
                <p className='list-inside'><a href="#">About</a></p>
                <p className='list-inside'><a href="#">Team</a></p>
                <p className='list-inside'><a href="#">Contact</a></p>
            </div>
        </div>
        <div className="side-right">
            <button className='signin'>Sign In</button>
        </div>
    </div>
  )
}

export default Header