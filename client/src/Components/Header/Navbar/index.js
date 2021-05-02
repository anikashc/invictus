import React from 'react';
import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './NavbarStyles';
import Link from '@material-ui/core/Link';
import {useScrollTrigger, Slide} from "@material-ui/core";

export default function Navbar(props) {
  const classes = useStyles();
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
    <AppBar position="sticky" >
       <Toolbar>
       
        <Typography variant="h6" className={classes.title} noWrap>
          <Link href="/"  color="inherit">
            INVICTUS
          </Link>
          
        </Typography>

        <IconButton color="inherit" aria-label="open drawer" onClick={props.opener} edge="end" style={{border:"none",outline:"none"}}>
          <MenuIcon />
        </IconButton>

      </Toolbar>
    </AppBar>
  </Slide>
  );
}
