import { React, useState } from "react";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import event_bg from "../Assets/Backgrounds/event_bg.jpg";
import { useParams } from "react-router-dom";
import Schedule from "../Components/Event/Schedule";
import Details from "../Components/Event/Details";
import Image from "../Components/Event/Image";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        background: `url(${event_bg}) no-repeat`,
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
        height: "100vh",
        width: "100%",
    },
    header: {
        paddingTop: "20px",
        color: "#FFFFFF",
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
        flexGrow: 1,
    },
    button: {},
    image: {
        marginTop: "5rem",
    },
});

const Event = () => {
    const { id } = useParams();
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container className={classes.eventBody}>
                <Grid container spacing={10}>
                    <Grid container item xs={7} spacing={3}>
                        <Details id={id} />
                    </Grid>
                    <Grid
                        container
                        item
                        xs={5}
                        spacing={3}
                        className={classes.image}
                    >
                        <Image id={id} />
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                        <Schedule id={id} />
                    </Grid>
                    <Grid container item xs={12}>
                        <Button
                            variant="outlined"
                            color="secondary"
                            className={classes.button}
                        >
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Event;
