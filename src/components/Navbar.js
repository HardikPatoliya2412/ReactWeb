import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
    return (
        <div>

         {/* <img src="https://gpt3-jsm.com/static/media/ai.aa60586b.png"/> */}

            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}  `}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/TextForms">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.aboutus} </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link "  to="/contect">Contect</Link>
                            </li>
                            
                            
                        </ul>
                        <form className="d-flex">

                            <div className={`form-check form-switch mx-1 text-${props.mode === 'light' ? 'dark':'light'}`}>
                            <input className="form-check-input" onClick={props.togglemode} type="checkbox"  role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" >{props.title1}</label>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.prototype = {
    title:PropTypes.string,
    aboutus:PropTypes.string
};