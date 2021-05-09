import { React } from "react";
import { useParams } from "react-router-dom";
import Schedule from "../Components/Event/Schedule";
import Details from "../Components/Event/Details";
import Image from "../Components/Event/Image";
import Container from "@material-ui/core/Container";
import { Grid, Button, makeStyles } from "@material-ui/core";
import eventsData from "../Assets/EventsData";
import NotFound from "./NotFound";

const useStyles = makeStyles({
    root: {
        background: "#1B1430" /* fallback for old browsers */,
        background:
            "-webkit-linear-gradient(to top, #3c1053, #ad5389)" /* Chrome 10-25, Safari 5.1-6 */,
        background: "linear-gradient(to top,#642A7F, #1B1430)",
        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        height: "100%",
        width: "100%",
        padding: "3rem 0",
        fontSize: "2rem",
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
        marginBottom: "2rem",
        fontSize: "2rem",
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
    },
    image: {
        marginTop: "5rem",
    },
});

const Event = () => {
    const { id } = useParams();
    const classes = useStyles();
    if (!eventsData[id]) {
        return <NotFound />;
    }

    return (
        <div className={classes.root}>
            <Container className={classes.eventBody}>
                <Grid container align="center" justify="center">
                    <Grid
                        container
                        item
                        lg={7}
                        md={7}
                        sm={12}
                        xs={12}
                        spacing={3}
                    >
                        <Details id={id} />
                    </Grid>
                    <Grid
                        item
                        sm={12}
                        xs={12}
                        md={5}
                        lg={5}
                        spacing={3}
                        align="center"
                        justify="center"
                        className={classes.image}
                    >
                        <Image id={id} />
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                        <Schedule id={id} />
                    </Grid>
                    <Grid container item xs={12}>
                        <Button className={classes.register}>
                            REGISTER NOW
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Event;
