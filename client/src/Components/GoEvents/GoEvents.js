import React from 'react'
import './GoEvents.css'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const useStyles= makeStyles({
    root:{
        height: '100%',
        width: '100%',
        padding: '10px',
        background: '#FFFFFF',
        
        '@media: (max-width: 900px)':{
          border: 'solid 8px #D66496'
        },
        
        '@media: (max-width: 600px)':{
          border: 'solid 6px #D66496'
        },
        '@media: (max-width: 425px)':{
          border: 'solid 4px #D66496'
        },
    },
    header:{  
    paddingTop: '20px',  
    color: '#1B1430', 
    fontSize: '2.5rem',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Rajdhani',
    fontStyle: 'normal',
    fontWeight: 'bold',
    },
})

const GoEvents = () => {
  const classes=useStyles();

    return (
        <div class="body" className={classes.root}>
          <Box className={classes.header}>GLIMPSE OF EVENTS</Box>
        <ul class="cards-event">
  <li>
    <div data-aos="fade-up" href="" class="card-event">
      <img src="https://images.pexels.com/photos/2952834/pexels-photo-2952834.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <div class="card__thumb" ></div>
          <div class="card__header-text">
            <h3 class="card__title">Event 1</h3>            
            <span class="card__status">1 hour ago</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </div>      
  </li>
  <li>
    <div data-aos="fade-up" href="" class="card-event">
      <img src="https://images.pexels.com/photos/7647922/pexels-photo-7647922.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card__image" alt="" />
      <div class="card__overlay">        
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <div class="card__thumb" ></div>
          <div class="card__header-text">
            <h3 class="card__title">Event 2</h3>
            <span class="card__status">3 hours ago</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </div>
  </li>
  <li>
    <div data-aos="fade-up" href="" class="card-event">
      <img src="https://images.pexels.com/photos/594233/pexels-photo-594233.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <div class="card__thumb" ></div>
          <div class="card__header-text">
            <h3 class="card__title">Event 3</h3>           
            <span class="card__status">1 hour ago</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </div>
  </li>
  <li>
    <div data-aos="fade-up" href="" class="card-event">
      <img src="https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <div class="card__thumb" ></div>
          <div class="card__header-text">
            <h3 class="card__title">Event 4</h3>
            <span class="card__status">3 hours ago</span>
          </div>          
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </div>
  </li>    
</ul>
</div>


    )
}

export default GoEvents
