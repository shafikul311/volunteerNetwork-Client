import React, { useEffect, useState } from 'react';
import EventCardList from '../EventCardList/EventCardList';
import SearchField from '../SearchField/SearchField';

const Home = () => {
    const [allEvents , setAllEvents] = useState([])

    useEffect(() =>{
        const url = `http://localhost:5080/event`
        fetch(url)
        .then(res =>res.json())
        .then(data =>setAllEvents(data))

    },[])

    console.log(allEvents)
    return (
        <div>
            <div>
            <SearchField/>
            </div>
            <div>
                <div class="row row-cols-1 m-5 row-cols-md-4 g-4">
               {
                allEvents.map((event ,id)=><EventCardList event={event} key={id}></EventCardList>)
                }
               </div>

            </div>
        </div>
    );
};

export default Home;