import React from "react";
import eventsData from "../../Meta/EventsData";
import Container from "@material-ui/core/Container";

const Schedule = ({ id }) => {
    const date = eventsData[id].schedule.date,
        time = eventsData[id].schedule.time;
    return (
        <section>
            <Container>
                <h2 style={{ color: "#3F51B5" }}>Schedule</h2>
                <p>Date: {date}</p>
                <p>Time: {time}</p>
            </Container>
        </section>
    );
};

export default Schedule;
