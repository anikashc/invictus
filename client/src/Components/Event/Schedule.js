import React from "react";
import eventsData from "../../Assets/EventsData";
import Container from "@material-ui/core/Container";

const Schedule = ({ id }) => {
    const stDate = eventsData[id].start.dateTime,
        edDate = eventsData[id].end.dateTime;
    return (
        <section>
            <h2 style={{ color: "#FFF" }}>Schedule</h2>
            <p>Start Date: {stDate.substr(0, 10)}</p>
            <p>Start Time: {stDate.substr(11, 8)}</p>
            <p>End Date: {edDate.substr(0, 10)}</p>
            <p>End Time: {edDate.substr(11, 8)}</p>
        </section>
    );
};

export default Schedule;
