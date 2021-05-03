import React, { useEffect, useState } from 'react';
import EventCardList from '../EventCardList/EventCardList';
import SearchField from '../SearchField/SearchField';
import './Home.css'

const Home = () => {
    const [allEvents , setAllEvents] = useState([])

    useEffect(() =>{
        const url = `https://stark-reaches-61306.herokuapp.com/event`
        fetch(url)
        .then(res =>res.json())
        .then(data =>setAllEvents(data))

    },[])

    console.log(allEvents)
    return (
        <div className="home-container">
            <div>
            <SearchField/>
            </div>
            <div>
                <div className="row row-cols-1 m-5 row-cols-md-4 g-4">
               {
                allEvents.map((event ,id)=><EventCardList event={event} key={id}></EventCardList>)
                }
               </div>

            </div>
        </div>
    );
};

export default Home;