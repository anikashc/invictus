import React from "react";
import eventsData from "../../Assets/EventsData";
import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Breadcrumb from "./Breadcrumb";

const Details = ({ id }) => {
    const detail = eventsData[id].description;
    return (
        <div style={{ flexGrow: 1, marginTop: "3rem" }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Breadcrumb id={id} />
                </Grid>
                <Grid item xs={12}>
                    <h2
                        style={{
                            color: "#EE81B2",
                            textTransform: "capitalize",
                        }}
                    >
                        {id}
                    </h2>
                    <p style={{ color: "#FFF" }}>{detail}</p>
                </Grid>
            </Grid>
        </div>
    );
};

export default Details;
