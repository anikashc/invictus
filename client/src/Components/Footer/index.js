import React from 'react'
import classNames from 'classnames';
import { Grid, Box } from '@material-ui/core';
import { useStyles } from './FooterStyles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom'


const Footer = () => {
  const classes = useStyles();
  
  const location = useLocation().pathname;

    return (

        <footer>
        <Grid container className={classNames(classes.root,{
        [classes.sponsor] : location==='/sponsors',})}>   
        <Grid container className={classes.footer}>
        <Grid item xs={4} className={classes.findus}>
          <Box className={classes.header}>FOLLOW US</Box>
          <Box className={classes.socialLinksContainer}>
          <Box className={classes.section}>
              <a href="https://www.facebook.com/InvictusDtu/" target="_blank">
              <FacebookIcon  className={classes.findusLink}  />
              </a>
            </Box>
            <Box className={classes.section}>
            <a  href="https://www.instagram.com/invictusdtu/" target="_blank">
             <InstagramIcon   className={classes.findusLink}  />
            </a>
            </Box>
            <Box className={classes.section}>
            <a href="https://www.linkedin.com/company/invictus-dtu/" target="_blank">
             <LinkedInIcon className={classes.findusLink} />
            </a>
            </Box>
          </Box>
        </Grid>
        
        <Grid item xs={4} className={classes.sitemap}>
          <Box className={classes.header}>SITEMAP</Box>
          <Box className={classNames(classes.subtext, classes.section)}>
            <Link className={classes.sitemapLink} to="/">
              About
            </Link>
          </Box>
          <Box className={classNames(classes.subtext, classes.section)}>
            <Link className={classes.sitemapLink} to="/events">
              Events
            </Link>
          </Box>
          <Box className={classNames(classes.subtext, classes.section)}>
            <Link className={classes.sitemapLink} to="/team">
              Team
            </Link>
          </Box>
          <Box className={classNames(classes.subtext, classes.section)}>
            <Link className={classes.sitemapLink} to="/sponsors">
              Sponsors
            </Link>
          </Box>
          <Box className={classNames(classes.subtext, classes.section)}>
            <Link className={classes.sitemapLink} to="/faq">
              FAQ
            </Link>
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