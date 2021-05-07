import React, {useEffect, useState} from 'react'
import './Loading.css'
import { makeStyles } from '@material-ui/core';

const useStyles= makeStyles({
  home: { 
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    background: 'black'
  },
  animationContainer: {
    padding: '100px',
  }
})

const Loading = () => {
    const classes= useStyles();
    
    return (
        <React.Fragment>
          
            
            <div className={classes.home} id="home">
              
              <div className="typewriter">
                <h1>Invictus</h1>
              </div>

            </div>   
        </React.Fragment>
    )
}

export default Loading
