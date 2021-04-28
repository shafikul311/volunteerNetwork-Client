import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'

const SideBar = () => {
    return (
        <div style={{height:'100vh'}}>
            <ul  className="pt-5 side-bar-style">
            <Link className="text-light " to="/admin"> <li> Add Event</li></Link>
            <Link className="text-light " to="/volounteerList"> <li> <li> Manage Event</li></li></Link>
               
                
            </ul>
            
        </div>
    );
};

export default SideBar;