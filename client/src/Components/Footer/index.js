import React from 'react'
import classNames from 'classnames';
import { Grid, Box } from '@material-ui/core';
import { useStyles } from './FooterStyles';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
  const classes = useStyles();

    return (
        <footer> 
        <Grid container className={classes.root}>
        <Grid item sm={4} className={classes.logoContainer}>
        </Grid>
        <Grid
          item
          xs={6}
          sm={3}
          className={classes.helpCenterContainer}
        >
        <Box className={classes.header}>CONTACTS: </Box>
        <Box className={classNames(classes.subtext, classes.help)}>
          +91-9891416666
        </Box>
        <Box className={classNames(classes.subtext, classes.help)}>
        New Delhi
        </Box>    
        </Grid>
        <Grid item xs={6} sm={2} className={classes.sitemap}>
          <Box className={classes.header}>SITEMAP:</Box>
          <Box className={classNames(classes.subtext, classes.section)}>
            Home
          </Box>
          <Box className={classNames(classes.subtext, classes.section)}>
            Events
          </Box>
          <Box className={classNames(classes.subtext, classes.section)}>
            Sponsors
          </Box>
          <Box className={classNames(classes.subtext, classes.section)}>
            Team
          </Box>
          <Box className={classNames(classes.subtext, classes.section)}>
            FAQ
          </Box>
        </Grid>
        {/* <Grid item sm={4} className={classes.logoContainer}>
        </Grid> */}
        <Grid item sm={3} className={classes.findus}>
          <Box className={classes.header}>FIND US ON:</Box>
          <Box className={classes.socialLinksContainer}>
            <Box className={classes.iconsContainer}>
              <a href="https://www.linkedin.com/company/invictus-dtu/" target="_blank">
                <LinkedInIcon color="action" />
              </a>
              <a href="https://www.instagram.com/invictusdtu/" target="_blank">
                <InstagramIcon color="action" />
              </a>
              <a href="https://www.facebook.com/InvictusDtu/" target="_blank">
                <FacebookIcon color="action" />
              </a>
             
            </Box>
          </Box>
        </Grid>
      </Grid>
        </footer>
    )
}

export default Footer
