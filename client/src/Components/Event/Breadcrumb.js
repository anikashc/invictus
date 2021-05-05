import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

export default function Breadcrumb({ id }) {
    return (
        <Breadcrumbs aria-label="breadcrumb" style={{ color: "#FFF" }}>
            <Link color="inherit" href="/">
                Home
            </Link>
            <Link color="inherit" href="/events">
                Events
            </Link>
            <Link color="inherit" href={`/events/${id}`} aria-current="page">
                {id.slice(0, 1).toUpperCase() + id.slice(1)}
            </Link>
        </Breadcrumbs>
    );
}
