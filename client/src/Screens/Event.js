import { React, useState } from 'react';
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import event_bg from '../Assets/Backgrounds/event_bg.jpg'
import { useParams } from "react-router-dom";
import Schedule from "../Components/Event/Schedule";
import Details from "../Components/Event/Details";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";


const useStyles= makeStyles({
    root:{        background: '#654ea3',  /* fallback for old browsers */
    background: '-webkit-linear-gradient(to bottom, #eaafc8, #654ea3)',  /* Chrome 10-25, Safari 5.1-6 */
    background: 'linear-gradient(to bottom, #eaafc8, #642A7F)',/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        height: '100vh',
        width: '100%',
    },
    header:{  
        paddingTop: '20px',  
      color: '#FFFFFF', 
      fontSize: '2.5rem',
      display: 'flex',
      justifyContent: 'center',
      fontFamily: 'Rajdhani',
      fontStyle: 'normal',
      fontWeight: 'bold',
      }
})

const Event = () => {
    const { id } = useParams();
    const classes= useStyles();

    return (
        <div className={classes.root}>
            <Details id={id} />
            <Schedule id={id} />
            <Container style={{ marginBottom: "2rem" }}>
                <Button variant="outlined" color="secondary">
                    Register
                </Button>
            </Container>
        </div>
    );
};

export default Event;
