import React from 'react';
import {Drawer, List, Divider, IconButton, Typography, Container, ListItem}  from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useStyles } from './DrawerStyles';
import { useHistory } from 'react-router-dom';

export default function CustomDrawer(props) {
  const classes = useStyles();
  const history = useHistory();

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
        {['Home', 'Events', 'Sponsors', 'Schedule', 'Team', 'FAQ'].map((text, index) => (
          <Container className = {classes.itemContainer} key = {"itemcontainer"+index}>

              <ListItem 
                button  
                key = {'itemtext'+index}
                onClick = {()=>text === 'Home' ? history.push(`/`) : history.push(`/${text}`)}>

                  <Typography  className = {classes.itemText}>
                    {text}
                  </Typography>
                
              </ListItem>

              <Divider />

          </Container>
        ))}
      </List>

    </Drawer>
  );
}
