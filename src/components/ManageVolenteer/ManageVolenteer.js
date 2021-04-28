import React, { useEffect, useState } from 'react';
import ManageEvents from '../ManageEvents/ManageEvents';
import SideBar from '../SideBar/SideBar';

const ManageVolenteer = () => {
    const [events , setEvents] = useState([])
    useEffect(() => {
        const url = `http://localhost:5080/event`
        fetch(url)
        .then(res => res.json())
        .then(data=>setEvents(data))
    },[])
    console.log(events)
    return (
        <div>
             <div className="row d-flex">
        <div className="col-md-2 bg-secondary">
           <SideBar></SideBar>
        </div>
        <div className="col-md-10 p-3">
            <h2>Manage Event</h2> 
            <div>
                    <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Title</th>
                        <th scope="col">Date</th>
                        <th scope="col">Manage</th>
                        </tr>
                    </thead>
                            {
                            events.map((event , id)=> <ManageEvents key={id} event={event}></ManageEvents>)

                        }
                    
                    </table>
            </div>
           
        </div>
        </div>
            
        </div>
    );
};

export default ManageVolenteer;