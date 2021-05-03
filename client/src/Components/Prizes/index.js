import { makeStyles } from '@material-ui/core'
import React from 'react'

import prizes_bg from '../../Assets/Backgrounds/prizes.jpg'

const useStyles= makeStyles({
    root:{
        background:  `url(${prizes_bg}) no-repeat`,
        backgroundPosition: 'center',
        backgroundSize: '100% 115%',
        height: '100vh',
        width: '100%',
    }
})

const Prizes = () => {
    const classes= useStyles();
    return (
        <div className={classes.root}>
            
        </div>
    )
}

export default Prizes
