import React, {useEffect, useState} from 'react'
import './Loading.css'
import { makeStyles } from '@material-ui/core';


import LottieAnimation from './../../Screens/Lottie';

import loading from '../../Assets/Animations/loading.json';

const useStyles= makeStyles({
  home: { 
    position: 'relative',
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    background: 'black'
  },
  animation: {
    zIndex: 900,
    position: 'absolute',
    top: '0%',
    left: '30%',
    '@media (max-width: 1200px)':{
    left: '18%',
    },
    
    '@media (max-width: 900px)':{
      left: '10%',
    },
    
    '@media (max-width: 768px)':{
      left: '8%',
    },
    
    '@media (max-width: 600px)':{
      left: '6%',
      top: '12%',
    },
    
    '@media (max-width: 375px)':{
      left: '4%',
      top: '20%',
    }
  },
  textAnimation: {
    zIndex: 10000,
    position: 'absolute',
    top: 0,
    right: 0,
  }
})

const Loading = () => {
    const classes= useStyles();
    
    return (
        <React.Fragment>
          
            
            <div className={classes.home} id="home">
              
              
              <div className="typewriter" >
                
                <h1 className={classes.textAnimation}> Invictus'21</h1>
                <LottieAnimation className={classes.animation} lotti={loading} ></LottieAnimation>
                
              </div>

            </div>   
        </React.Fragment>
    )
}

export default Loading
