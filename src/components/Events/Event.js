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
        <div>
            <h1>Booked Events</h1>
            {
                bookEvents.map((bookEvent ,id)=><BookedEvent key={id} bookEvent={bookEvent}></BookedEvent>)
            }
            
        </div>
    );
};

export default Event;