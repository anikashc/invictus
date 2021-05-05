import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import eventsData from "../../Assets/EventsData";

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        width: "25rem",
        height: "15rem",
        objectFit: "cover",
    },
});

export default function Image({ id }) {
    const classes = useStyles();
    const logo = eventsData[id].poster;

    return <img src={logo} className={classes.root} />;
}
