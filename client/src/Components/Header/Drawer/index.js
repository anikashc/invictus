import React from 'react';
import {Drawer, List, Divider, IconButton, Typography, Container, ListItem, ListItemText}  from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useStyles } from './DrawerStyles';

export default function CustomDrawer(props) {
  const classes = useStyles();

  return (

    <Drawer
      anchor='right'
      open={props.isOpen}
      classes={{
       paper: classes.drawerPaper,
      }}
      >
      <div className={classes.drawerHeader}>
        <IconButton onClick={props.closer}>
          <ChevronRightIcon/>
        </IconButton>
      </div>
        
        
      <List>
        {['Home', 'Events', 'Sponsors', 'Schedule', 'Team'].map((text, index) => (
          <Container className = {classes.itemContainer} key = {"itemcontainer"+index}>
              <ListItem button  key = {"itemtext"+index}>
                <ListItemText
                  disableTypography 
                  primary={<Typography  className = {classes.itemText}>{text}</Typography>} />
              </ListItem>
              <Divider />
          </Container>
        ))}
      </List>

    </Drawer>
  );
}
