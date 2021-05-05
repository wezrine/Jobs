import React, { useState } from 'react'
import logo from './logo.png'
import { NavLink } from "react-router-dom";
import { setAuthenticationHeader } from '../utils/authenticate'


function Header() {

    const [isBurgerActive, setisBurgerActive] = useState(false)

    // const [isRegisterActive, setisRegisterActive] = useState(false)
    // const [credentials, setCredentials] = useState({})

    // const closeModal = () => {
    //     setisModalActive(!isModalActive)
    //     setisRegisterActive(false)
    // }

    // const handleOnChange = (e) => {
    //     setCredentials({
    //         ...credentials, 
    //         [e.target.name]: e.target.value
    //     })
    // }

    // const handleLogin = () => {
    //     fetch('http://localhost:8080/login', {
    //         method: 'POST', 
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }, 
    //         body: JSON.stringify(credentials)
    //     }).then(response => response.json())
    //     .then(result => {
    //         if(result.success) {
    //             console.log(this.props)
    //             const token = result.token 
    //             // get the token and put it in local storage 
    //             localStorage.setItem("jsonwebtoken", token)
    //             localStorage.setItem("username", result.username)
    //             // take the user to the jobs screen 
    //             this.props.history.push('/jobs')
    //         }
    //     })
    // }

    const handleLogout = () => {

        localStorage.removeItem("jsonwebtoken")
        localStorage.removeItem("username")
        setAuthenticationHeader(null)

        window.location.replace('/login')
    }

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <p className="navbar-item">
                    <img src={logo} alt="logo" width="112" height="28" />
                </p>

                <p onClick={() => { setisBurgerActive(!isBurgerActive) }} role='button' className={`navbar-burger burger ${isBurgerActive ? 'is-active' : ''}`} aria-label='menu' aria-expanded='false' data-target='navbarBasicExample'>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </p>
            </div>

            <div id='navbarBasicExample' className={`navbar-menu ${isBurgerActive ? 'is-active' : ''}`}>
                <div className="navbar-start">
                    <NavLink to="/" className="navbar-item">How it Works</NavLink>
                    <NavLink to="/jobs" className="navbar-item">My Jobs</NavLink>
                    <NavLink to="/add-job" className="navbar-item">Add a Job</NavLink>

                    {/* <div className="navbar-item has-dropdown is-hoverable">
                        <p className="navbar-link">
                            More
                        </p>

                        <div className="navbar-dropdown">
                            <NavLink to="/" className="navbar-item">About</NavLink>
                            <NavLink to="/" className="navbar-item">How it Works</NavLink>
                            <NavLink to="/" className="navbar-item">Meet the Dev</NavLink>
                            <hr className="navbar-divider" />
                            <NavLink to="/" className="navbar-item">Report an issue</NavLink>
                        </div>
                    </div> */}
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <NavLink to="/" className="navbar-item">My Profile</NavLink>
                        <NavLink to='/login'><button className="button is-primary"><strong>Login</strong></button></NavLink>
                        <button onClick={handleLogout} className="button is-primary"><strong>Logout</strong></button>
                    </div>
                </div>
            </div>
{/* 
            <div className={`modal ${isModalActive ? 'is-active' : ''}`}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        {isRegisterActive ? <p className="modal-card-title">Register</p> : <p className="modal-card-title">Login</p>}
                        <button onClick={() => { closeModal() }} className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body vertical">
                        <div className='login-row'>
                            <span className="icon"><i className="fas fa-user"></i></span>
                            <input onChange={handleOnChange} className="input" type="text" placeholder="Username" name="username" />
                        </div>
                        <div className='login-row'>
                            <span className="icon"><i className="fas fa-lock"></i></span>
                            <input onChange={handleOnChange} className="input" type="password" placeholder="Password" name="password" />
                        </div>
                    </section>
                    <footer className="modal-card-foot">
                        {isRegisterActive ? <button className="button is-success">Register</button> : <button onClick={handleLogin} className="button is-success">Login</button>}
                        {isRegisterActive ? <button className="button" onClick={() => { setisRegisterActive(false) }}>Login</button> : <button className="button" onClick={() => { setisRegisterActive(true) }}>Register</button>}
                        {isRegisterActive ? '' : <button className="button">Continue as Guest</button>}
                    </footer>
                </div>
            </div> */}
        </nav>
    )
}

export default Header