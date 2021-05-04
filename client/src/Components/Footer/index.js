import React from 'react'
import classNames from 'classnames';
import { Grid, Box } from '@material-ui/core';
import { useStyles } from './FooterStyles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

const Footer = () => {
  const classes = useStyles();

    return (
        <footer>
        <Grid container className={classes.root}>   
        <Grid container className={classes.footer}>
        <Grid item xs={4} className={classes.findus}>
          <Box className={classes.header}>FOLLOW US</Box>
          <Box className={classes.socialLinksContainer}>
            <Box className={classes.section}>
             <FacebookIcon fontSize="large"  style = {{color:"#081261"}}/>
            </Box>
            <Box className={classes.section} style = {{color:"#081261"}}>
             <InstagramIcon fontSize="large"/>
            </Box>
            <Box className={classes.section} style = {{color:"#081261"}}>
             <LinkedInIcon fontSize="large"/>
            </Box>
          </Box>
        </Grid>
        
        <Grid item xs={4} className={classes.sitemap}>
          <Box className={classes.header}>SITEMAP</Box>
          <Box className={classNames(classes.subtext, classes.section)}>
            About
          </Box>
          <Box className={classNames(classes.subtext, classes.section)}>
            Events
          </Box>
          <Box className={classNames(classes.subtext, classes.section)}>
              Team
          </Box>
          <Box className={classNames(classes.subtext, classes.section)}>
            Sponsors
          </Box>
          <Box className={classNames(classes.subtext, classes.section)}>
            FAQ
          </Box>
        </Grid>
        <Grid
          item
          xs={4}
          className={classes.helpCenterContainer}
        >
        <Box className={classes.header}>CONTACTS</Box>
        <Box className={classNames(classes.subtext, classes.help)}>
          +91-9891416666
        </Box>
        <Box className={classNames(classes.subtext, classes.help)}>
        New Delhi
        </Box>    
        </Grid>
      </Grid>
      </Grid> 
        </footer>
    )
}

export default Footer
