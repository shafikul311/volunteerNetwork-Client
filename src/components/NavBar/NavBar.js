import React from 'react';
import { Link } from 'react-router-dom';
import imag from '../../images/vlogo.png'
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="justify-content-between" >
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid">
    <img src={`${imag}`} style={{height:"50px"}} alt=""/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav nav-style ">
        <li className="nav-item p-3 ">
        <Link to="/home">Home</Link>
          
        </li>
        <li className="nav-item p-3">
        <Link className="link-color" to="/donation">Donation</Link>
        </li>
        <li className="nav-item p-3">
        <Link className="link-color" to="/events">Events</Link>
        </li>
        <li className="nav-item p-3">
        <Link className="link-color" to="/blogs">Blogs</Link>
        </li>
        <li className="nav-item p-3 me-5">
        <Link className="link-color" to="/admin">
        <button className="link-color btn btn-outline-primary">Admin</button>
        </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
            
        </div>
    );
};

export default NavBar;
