import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div>
            <ul>
            <Link to="/admin"> <li> Add Event</li></Link>
            <Link to="/volounteerList"> <li> <li> Manage Event</li></li></Link>
               
                
            </ul>
            
        </div>
    );
};

export default SideBar;