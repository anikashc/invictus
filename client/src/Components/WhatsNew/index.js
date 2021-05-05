import { makeStyles } from '@material-ui/core'
import React from 'react'
import {Carousel} from '3d-react-carousal';
import Box from '@material-ui/core/Box';
import WhatsNew_bg from '../../Assets/Backgrounds/whats_new_bg.jpg'

const useStyles= makeStyles({
    root:{
        height: '50vh',
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
let slides = [
  <img  src="https://picsum.photos/800/300/?random" alt="1" />,
  <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
  <img  src="https://picsum.photos/800/302/?random" alt="3" />  ,
  <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
  <img src="https://picsum.photos/800/304/?random" alt="5" />   
];
const WhatsNew = () => {
    const classes= useStyles();
    return (
        <div className={classes.root}>
            
          <Box className={classes.header}>WHATS NEW</Box>
          <Carousel slides={slides} autoplay={true} interval={2000}/>
        </div>
    )
}

export default WhatsNew
