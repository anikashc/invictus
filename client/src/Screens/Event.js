import React from "react";
import { useParams } from "react-router-dom";
import Schedule from "../Components/Event/Schedule";
import Details from "../Components/Event/Details";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const Event = () => {
    const { id } = useParams();
    return (
        <>
            <Details id={id} />
            <Schedule id={id} />
            <Container style={{ marginBottom: "2rem" }}>
                <Button variant="outlined" color="secondary">
                    Register
                </Button>
            </Container>
        </>
    );
};

export default Event;
