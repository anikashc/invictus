import React from "react";
import eventsData from "../../Assets/EventsData";
import Container from "@material-ui/core/Container";

const Schedule = ({ id }) => {
    const stDate = eventsData[id].start.dateTime,
        edDate = eventsData[id].end.dateTime;
    return (
        <section style={{ color: "#FFF", textAlign: "left" }}>
            <h2 style={{ color: "#EE81B2" }}>Schedule</h2>
            <p style={{ marginTop: "1rem", lineHeight: "1.5rem" }}>
                Start Date: {stDate.substr(0, 10)}
            </p>
            <p style={{ lineHeight: "1.5rem" }}>
                Start Time: {stDate.substr(11, 8)}
            </p>
            <p style={{ lineHeight: "1.5rem" }}>
                End Date: {edDate.substr(0, 10)}
            </p>
            <p style={{ lineHeight: "1.5rem" }}>
                End Time: {edDate.substr(11, 8)}
            </p>
        </section>
    );
};

export default Schedule;
