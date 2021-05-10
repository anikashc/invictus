import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import {  Link } from "react-router-dom";

export default function Breadcrumb({ id }) {
    return (
        <Breadcrumbs aria-label="breadcrumb" style={{ color: "#FFF" }}>
             <Link to='/' style={{ color: "#EE81B2",textDecoration: 'none' }}>
             Home
             </Link>

            <Link to='/events' style={{ color: "#EE81B2",textDecoration: 'none' }}>
                Events
            </Link>

            <Link
                to={`/events/${id}`}
                aria-current="page"
                style={{ color: "#ffffff", textDecoration: 'none' }}
            >
                {id.slice(0, 1).toUpperCase() + id.slice(1)}
            </Link>
        </Breadcrumbs>
    );
}
