import React from "react";
import eventsData from "../../Assets/EventsData";
import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import logo from "../../Assets/blindcoding.png";

const Details = ({ id }) => {
    const detail = eventsData[id].detail;
    return (
        <div style={{ flexGrow: 1, marginTop: "3rem" }}>
            <Grid container spacing={3}>
                <Grid item xs={9}>
                    <Container>
                        <h2
                            style={{
                                color: "#3F51B5",
                                textTransform: "capitalize",
                            }}
                        >
                            {id}
                        </h2>
                        <p>{detail}</p>
                    </Container>
                </Grid>
                <Grid
                    item
                    xs
                    style={{
                        background: `url(${logo}) no-repeat`,
                        "@media (max-width:599px)": {
                            position: "absolute",
                            bottom: "35px",
                            left: "15%",
                        },
                        "@media (max-width:374px)": {
                            left: "12%",
                        },
                        "@media (max-width:320px)": {
                            left: "5%",
                        },
                    }}
                ></Grid>
            </Grid>
        </div>
    );
};

export default Details;
