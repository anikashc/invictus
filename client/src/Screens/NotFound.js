import { React, useState } from "react";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { Link, useParams } from "react-router-dom";
import Schedule from "../Components/Event/Schedule";
import Details from "../Components/Event/Details";
import Image from "../Components/Event/Image";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import { AppBar, Toolbar, Button, IconButton, Fade } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        background: "#1B1430" /* fallback for old browsers */,
        background:
            "-webkit-linear-gradient(to top, #3c1053, #ad5389)" /* Chrome 10-25, Safari 5.1-6 */,
        background: "linear-gradient(to top,#642A7F, #1B1430)",
        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        height: "100vh",
        width: "100%",
    },
    header: {
        paddingTop: "20px",
        color: "#EE81B2",
        fontSize: "2.5rem",
        display: "flex",
        justifyContent: "center",
        fontFamily: "Rajdhani",
        fontStyle: "normal",
        fontWeight: "bold",
    },
    eventBody: {
        margineBottom: "2rem",
        fontSize: "1.5rem",
        // flexGrow: 1,
    },
    register: {
        background: "#D66496",
        fontFamily: "Rajdhani",
        color: "white",
        fontWeight: "bold",
        padding: "5px 25px 5px 25px",
        "&:hover": {
            backgroundColor: "#DB4789",
        },
        fontSize: "1.5rem",
        margin: "-15px",
    },
    image: {
        marginTop: "5rem",
    },
});

const Event = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container className={classes.header}>
                404- Page Not found. Return to <Link to='/'> Home</Link>
            </Container>
        </div>
    );
};

export default Event;