import React from 'react';
import { useParams } from 'react-router-dom';
import eventsData from '../Meta/EventsData';

const Event = () => {
    const { id } = useParams()
    const detail = eventsData[id].detail, date = eventsData[id].schedule.date, time = eventsData[id].schedule.time;
    return (
        <div>
            <p>Details: {detail}</p>
            <p>Date: {date}</p>
            <p>Time: {time}</p>
            <button>Register</button>
        </div>
    )
}

export default Event
