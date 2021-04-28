import React, { useEffect, useState } from 'react';
import BookedEvent from '../BookedEvent/BookedEvent';

const Event = () => {
    const [ bookEvents , serBookEvents] = useState([])
    useEffect(() => {
        const url = `http://localhost:5080/getVolunteer`
        fetch(url)
        .then(res =>res.json())
        .then(data =>serBookEvents(data))
    },[])
    console.log(bookEvents)
    return (
        <div className="p-3">
            <h2>Your All Booked Events</h2>
           <div className="row d-flex m-2 p-2">
           {
                bookEvents.map((bookEvent ,id)=><BookedEvent key={id} bookEvent={bookEvent}></BookedEvent>)
            }
           </div>
            
        </div>
    );
};

export default Event;