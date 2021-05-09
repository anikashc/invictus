import { React } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { Grid } from "@material-ui/core";

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
        margin: "65% 0",
        fontSize: "2rem",
        color: "#FFF",
        "@media (min-width:600px)": {
            //mobile view
            margin: "20rem 0",
        },
    },
});

const NotFound = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container className={classes.eventBody}>
                <Grid container align="center" justify="center">
                    <Grid item>
                        <h3>
                            404- Page Not found. Return to{" "}
                            <Link
                                to="/"
                                style={{ color: "#EE81B2", cursor: "pointer" }}
                            >
                                Home
                            </Link>
                        </h3>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default NotFound;
