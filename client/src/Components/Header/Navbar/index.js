import React from 'react';
import {AppBar, Toolbar, Button, IconButton, Fade} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './NavbarStyles';
import {useScrollTrigger, Slide} from "@material-ui/core";
import logo from '../../../Assets/Logos/logo.svg';
import {  Link } from "react-router-dom";

export default function Navbar(props) {
  const classes = useStyles();
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar className={classes.navbar} elevation={0}>
        <Toolbar>

          <div className = {classes.title}>
            <Link to="/">

              <img 
                src = {logo} 
                className = {classes.image}
              />

            </Link>
          </div>
          
          <Fade in={!props.isOpen}>
            <div>
              <Button 
                className = {classes.register}
              >
                REGISTER NOW
              </Button>

              <IconButton 
                className = {classes.iconButton}
                color="inherit" 
                aria-label="open drawer" 
                onClick={props.opener} 
                edge="end" 
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Fade>

        </Toolbar>
      </AppBar>
    </Slide>
  );
}
