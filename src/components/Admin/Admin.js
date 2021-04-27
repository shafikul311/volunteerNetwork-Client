import React from 'react';
import AddEvent from '../AddEvent/AddEvent';
import SideBar from '../SideBar/SideBar';

const Admin = () => {
    return (
        <div className="row d-flex ">
            <div className="col-md-2 bg-secondary">
                <SideBar></SideBar>
            </div>
            <div className="col-md-10">
                <h2>Admin Dashboard</h2>
                <AddEvent></AddEvent>
            
            </div>
        </div>
    );
};

export default Admin;