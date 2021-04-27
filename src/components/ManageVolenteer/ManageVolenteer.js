import React from 'react';
import SideBar from '../SideBar/SideBar';

const ManageVolenteer = () => {
    return (
        <div>
             <div className="row d-flex ">
        <div className="col-md-2 bg-secondary">
           <SideBar></SideBar>
        </div>
        <div className="col-md-10">
            <h2>Volounteer List</h2> 
           
        </div>
        </div>
            
        </div>
    );
};

export default ManageVolenteer;